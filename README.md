# 🎓 2026011579 현지원 - Node.js 웹사이트

Node.js와 Express를 활용하여 **'2026011579 현지원'** 문구가 표시되는 반응형 웹사이트입니다.  
로컬 환경에서 간편하게 실행할 수 있으며, **Vercel**을 통해 무료로 웹에 배포할 수 있도록 설정되어 있습니다.

---

## 📁 프로젝트 구조

```
인공지능/
  ├── api/
  │   └── index.js       # Vercel Serverless Function 및 API 라우터 (/api/info)
  ├── public/
  │   └── index.html     # '2026011579 현지원' 표시 웹 UI (복사 버튼, 상태 모니터링 포함)
  ├── index.js           # 로컬 실행용 Express 서버 엔트리 포인트
  ├── package.json       # 프로젝트 설정 및 npm 스크립트
  ├── vercel.json        # Vercel 배포 라우팅 설정 파일
  ├── .gitignore         # Git 제외 파일 목록 (node_modules 등)
  └── README.md          # 사용 가이드 문서
```

---

## 🚀 1. 로컬에서 실행하는 방법

### 1) 패키지 설치
터미널(PowerShell 또는 명령 프롬프트)에서 아래 명령어를 실행합니다:
```bash
npm install
```

### 2) 서버 실행
```bash
npm start
```

### 3) 웹사이트 확인
브라우저를 열고 다음 주소로 접속합니다:
👉 **http://localhost:3000**

> 💡 **윈도우 PowerShell 스크립트 실행 오류가 발생할 경우:**  
> `npm.ps1을(를) 로드할 수 없습니다`와 같은 보안 오류가 나타나면 다음 방법 중 하나를 사용하세요:
> 1. `npm.cmd start` 로 실행
> 2. 또는 PowerShell을 관리자 권한으로 열고 `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` 입력 후 `Y` 선택

---

## 🌐 2. Vercel에 무료로 배포하는 방법

Vercel은 Node.js 및 정적 웹사이트를 무료(Hobby 플랜)로 호스팅해주는 클라우드 플랫폼입니다.

### 방법 A: GitHub 연동 (가장 추천하는 방법)

1. **GitHub에 코드 올리기**:
   ```bash
   git init
   git add .
   git commit -m "feat: 2026011579 현지원 웹사이트 초기 구현"
   git branch -M main
   # GitHub에서 새로 만든 저장소 URL 연결
   git remote add origin https://github.com/사용자이름/저장소이름.git
   git push -u origin main
   ```

2. **Vercel 접속 및 로그인**:
   - [Vercel 공식 사이트 (vercel.com)](https://vercel.com)에 접속하여 **GitHub 계정으로 로그인**합니다.

3. **프로젝트 임포트 (Import)**:
   - 대시보드 우측 상단의 **[Add New...]** ➔ **[Project]**를 클릭합니다.
   - 방금 올린 GitHub 저장소를 찾아 **[Import]** 버튼을 클릭합니다.

4. **배포 (Deploy)**:
   - 별도의 환경 변수나 빌드 커맨드 수정 없이 기본 설정 상태에서 **[Deploy]** 버튼을 누릅니다.
   - 약 30초~1분 후 배포가 완료되며, 무료로 제공되는 도메인(`https://프로젝트이름.vercel.app`)이 발급됩니다!

---

### 방법 B: Vercel CLI로 바로 배포하기

1. **Vercel CLI 실행**:
   프로젝트 폴더에서 터미널에 아래 명령어를 입력합니다:
   ```bash
   npx vercel
   ```
2. **화면 안내에 따라 진행**:
   - 브라우저 인증이 뜨면 로그인 진행
   - `Set up and deploy?` ➔ `y` 입력
   - 프로젝트명, 설정 등은 모두 Enter(기본값)로 진행
3. **배포 완료**:
   - 프로덕션 배포는 다음 명령어를 입력합니다:
   ```bash
   npx vercel --prod
   ```

---

## ✨ 주요 기능

1. **핵심 문구 표시**: 메인 화면에 **'2026011579 현지원'** 문구가 또렷한 그라디언트 타이포그래피로 표시됩니다.
2. **원클릭 복사 기능**: "문구 복사하기" 버튼 클릭 시 클립보드에 즉시 복사되고 안내 토스트 알림이 뜹니다.
3. **Node.js 서버 연동**: `/api/info` 엔드포인트를 통해 실시간 서버 상태와 응답 시간을 화면에 표시합니다.
4. **반응형 디자인**: 모바일 스마트폰, 태블릿, PC 모니터 어디서나 최적화된 화면을 제공합니다.
