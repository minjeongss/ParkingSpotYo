# 주차자리요 🚗💨

## 사용 방법

```
npm run dev
```

## 기술 🔨

- 빌드 도구: Vite
- 언어 및 라이브러리: React, Typescript
- 코드 품질 도구: ESLint (Airbnb 규칙 적용), Prettier
- 스타일링 도구: Emotion, StyledComponent
- 상태관리 도구: Zustand

## 구현 일정 관리 🗓️

요구사항 명세서의 중요도(상, 중, 하)에 따라 작업 순서를 분할하였습니다.
1차, 2차 기간으로 분할하였으며, 깃허브의 프로젝트 및 이슈 기능을 활용하여 일정 관리를 진행했습니다.

관련 기능을 구현한 경우, 이슈에 추적될 수 있도록 커밋 메시지에 이슈 번호를 할당했습니다.
이슈의 마일스톤을 활용해 각 주차별 계획의 진행도를 확인하며, 해당 주차가 마무리된 시점에 이행되지 못한 계획을 2차 기간에 재할당하게 됩니다.

- [요구사항 명세서: 구현할 기능 리스트 정리](https://github.com/minjeongss/ParkingSpotYo/wiki/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%AA%85%EC%84%B8%EC%84%9C)
- [프로젝트: 구현 예정, 구현 중, 구현 완료 기능 리스트 관리](https://github.com/users/minjeongss/projects/1/views/1)
- [이슈: 구현할 기능 리스트 관리](https://github.com/minjeongss/ParkingSpotYo/issues)

## 구현 기능 👀

현재 구현한 기능은 다음과 같습니다.

- 메인 화면
  - 카카오맵 API를 활용한 지도 구현
  - openAPI의 위경도를 활용해 지도에 마커 구현
  - 지도에 존재하는 마커를 클릭했을 때 모달 구현
  - 모달의 상세 보기를 클릭했을 때 상세 화면 이동 구현
- 상세 화면
  - 클릭한 마커의 데이터 연동 구현
  - 해당 마커의 지도, 상세 정보 제시 구현
