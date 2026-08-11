const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const WebcastPushConnection = require('tiktok-live-connector');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

let tiktokLiveConnection = null;

io.on('connection', (socket) => {
  console.log('Client đã kết nối quản lý Live Bar.');

  // Nhận yêu cầu kết nối phòng Live từ giao diện điều khiển
  socket.on('set-username', (tiktokUsername) => {
    if (!tiktokUsername) return;
    let cleanUsername = tiktokUsername.replace(/^@/, '');

    if (tiktokLiveConnection) {
      tiktokLiveConnection.disconnect();
    }

    console.log(`Đang kết nối tới phòng live của: @${cleanUsername}`);
    
    try {
      tiktokLiveConnection = new WebcastPushConnection(cleanUsername);

      tiktokLiveConnection.connect().then(state => {
        console.log(`Kết nối thành công phòng ID: ${state.roomInfo.roomId}`);
        io.emit('connection-status', { status: 'success', message: `Đã kết nối @${cleanUsername}` });
      }).catch(err => {
        console.error('Lỗi kết nối TikTok Live:', err);
        io.emit('connection-status', { status: 'error', message: 'Không thể kết nối phòng live này.' });
      });

      // Bắt sự kiện Chat
      tiktokLiveConnection.on('chat', data => {
        io.emit('tiktok-chat', {
          user: data.uniqueId,
          comment: data.comment
        });
      });

      // Bắt sự kiện Quà Tặng (Gift)
      tiktokLiveConnection.on('gift', data => {
        if (data.giftType === 1 || !data.repeatEnd) {
          io.emit('tiktok-gift', {
            user: data.uniqueId,
            giftName: data.giftName,
            diamondCount: data.diamondCount * data.repeatCount
          });
        }
      });

      // Bắt sự kiện Follow
      tiktokLiveConnection.on('social', data => {
        if (data.displayType && data.displayType.includes('follow')) {
          io.emit('tiktok-follow', { user: data.uniqueId });
        }
      });

    } catch (error) {
      console.error('Lỗi hệ thống:', error);
    }
  });

  // Nhận lệnh giả lập hoặc kích hoạt hiệu ứng thủ công từ bảng điều khiển
  socket.on('trigger-action', (data) => {
    io.emit('manual-trigger', data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server Pro đang chạy tại cổng: ${PORT}`);
});