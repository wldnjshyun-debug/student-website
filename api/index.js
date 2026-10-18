const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
// 실행 환경 감지
function getEnvironment() {
  if (process.env.RENDER || process.env.RENDER_SERVICE_ID || process.env.RENDER_INSTANCE_ID) {
    return 'Render Cloud Server';
  }
  if (process.env.VERCEL) {
    return 'Vercel Serverless';
  }
  return 'Local Node.js Server';
}
// API 엔드포인트: 학생 정보 및 서버 상태 반환
app.get('/api/info', (req, res) => {
  res.json({
    studentId: '2026011579',
    name: '현지원',
    displayText: '2026011579 현지원',
    server: 'Node.js Express',
    environment: getEnvironment(),
    status: 'online',
    timestamp: new Date().toISOString()
  });
});
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});
// 정적 파일 서빙 (로컬 실행 시)
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));
// 메인 라우트
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});
module.exports = app;
