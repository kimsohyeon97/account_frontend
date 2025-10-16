# Account_frontend

> 편한 가계부 클론 프로젝트의 프로트엔드 프로젝트 입니다.<br>

## Stack

- vue.js - 프론트엔드 프레임워크

## Install(dev)

```bash
개발 환경으로 실행
npm run dev
운영 환경으로 실행
npm start
```

## Structure

```

```

## Branch Naming

```
main: 배포 브랜치, release 브랜치를 merge할 경우 버전에 대해 태그를 달아줘야 함 (실서버 연동)
develop: 개발 브랜치 (개발서버 연동)
feature: 기능 개발 브랜치
fix : 오류/ 버그 수정 브랜치
refactor: 리팩토링 브랜치
hotfix : 출시 버전에서 긴급 수정 브랜치, (main 에서 분기)
release : 배포 전용 브랜치, (develop에서 분기해서 main에 merge)
          최종 테스트 중 버그 발견-수정 시 main, develop 두 군데에 반영(ex. release/1.1.0)
```

## Commit Convention

```
feature: 새로운 기능 추가
fix: 버그 수정
docs: 문서 작업 (README, Swagger 등)
design: 사용자 UI 디자인 변경 (CSS 등)
style: 코드 수정 없이 스타일만 변경 (들여쓰기 같은 포맷이나 세미콜론 빼먹은 경우)
refactor: 코드 리팩토링
chore: 자잘한 수정이나 빌드 업데이트
test: Test 관련 코드 작업
release: 배포 준비 작업
hotfix: 긴급 수정
```

### 코딩 스타일 규칙
