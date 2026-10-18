const app = require('./api/index');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('====================================================');
  console.log('🚀 웹 서버가 성공적으로 실행되었습니다!');
  console.log(`🔗 로컬 주소: http://localhost:${PORT}`);
  console.log(`📄 표시 문구: 2026011579 현지원`);
  console.log(`📡 API 엔드포인트: http://localhost:${PORT}/api/info`);
  console.log('====================================================');
  console.log('종료하려면 터미널에서 Ctrl + C 를 누르세요.');
});
