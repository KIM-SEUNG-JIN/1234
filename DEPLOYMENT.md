# 모바일 청첩장 웹사이트 배포 지침

이 문서는 수정된 모바일 청첩장 웹사이트를 Vercel에 배포하는 방법을 안내합니다.

## 사전 준비

1. [GitHub](https://github.com) 계정
2. [Vercel](https://vercel.com) 계정

## 배포 단계

### 1. GitHub 저장소 생성

1. GitHub에 로그인합니다.
2. 새 저장소(repository)를 생성합니다.
   - 저장소 이름: `mobile-wedding-invitation` (또는 원하는 이름)
   - 공개/비공개 설정: 선택
   - README 파일 생성: 선택 사항

### 2. 로컬 프로젝트를 GitHub에 업로드

```bash
# 프로젝트 디렉토리로 이동
cd 프로젝트_디렉토리_경로

# Git 초기화
git init

# 모든 파일 추가
git add .

# 커밋 생성
git commit -m "Initial commit"

# GitHub 저장소 연결
git remote add origin https://github.com/사용자이름/mobile-wedding-invitation.git

# 코드 푸시
git push -u origin main
```

### 3. Vercel에 배포

1. [Vercel](https://vercel.com)에 로그인합니다.
2. "New Project" 버튼을 클릭합니다.
3. GitHub 계정을 연결하고 방금 생성한 저장소를 선택합니다.
4. 프로젝트 설정:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: 기본값 유지 (npm run build)
   - Output Directory: 기본값 유지 (.next)
5. 환경 변수 설정 (필요한 경우):
   - 구글 맵 API 키 등 필요한 환경 변수 추가
6. "Deploy" 버튼을 클릭합니다.

### 4. 배포 후 설정

1. 배포가 완료되면 Vercel에서 제공하는 도메인(예: https://mobile-wedding-invitation.vercel.app)으로 접속할 수 있습니다.
2. 필요한 경우 커스텀 도메인 설정:
   - Vercel 대시보드에서 프로젝트 선택
   - "Settings" > "Domains" 메뉴로 이동
   - "Add" 버튼을 클릭하고 원하는 도메인 입력
   - 안내에 따라 DNS 설정 변경

## 업데이트 방법

웹사이트 내용을 업데이트하려면:

1. 로컬에서 파일 수정
2. Git 커밋 및 푸시
```bash
git add .
git commit -m "Update content"
git push
```
3. Vercel이 자동으로 새 버전을 배포합니다.

## 주의사항

1. 이미지 최적화: 이미지는 10MB 이하로 유지하고, WebP 형식 사용을 권장합니다.
2. 환경 변수: API 키와 같은 민감한 정보는 반드시 환경 변수로 관리하세요.
3. 모바일 테스트: 배포 후 다양한 모바일 기기에서 테스트하세요.

## 문제 해결

배포 중 문제가 발생하면 Vercel 대시보드에서 빌드 로그를 확인하세요. 대부분의 오류는 빌드 로그에서 확인할 수 있습니다.
