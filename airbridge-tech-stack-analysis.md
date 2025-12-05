# Airbridge 기술 스택 분석

## 개요

**Airbridge**는 AB180(에이비일팔공)에서 개발한 모바일 앱 마케팅 어트리뷰션 플랫폼입니다. Android, iOS, SKAN, Web, PC, Console 전환을 하나의 플랫폼에서 추적하는 Mobile Measurement Partner(MMP) 솔루션을 제공합니다.

- **공식 홈페이지**: https://www.airbridge.io/
- **도움말 센터**: https://help.airbridge.io/
- **GitHub**: https://github.com/ab180

---

## Frontend 기술 스택

### Core Technologies

- **Framework**: React + TypeScript
- **Build Tool**: Vite (SPA 기반)
- **State Management**:
  - React Context
  - Recoil
  - React Query
  - Redux (마이그레이션 진행 중)

### Styling & UI

- **CSS-in-JS**:
  - Emotion
  - Stitches

### Development & Deployment

- **개발 방식**: Trunk-based Development
- **Preview 배포**: Vercel
- **Production 배포**: AWS S3
- **번들러**: Webpack
- **추가 도구**: ESNext

### Monitoring & Analytics

- **에러 추적**: Sentry
- **사용자 행동 분석**: LogRocket
- **기타**: reCAPTCHA, Zendesk Web Widget

### Frontend 팀 요구사항

- React, Redux, Webpack, ESNext에 대한 깊은 이해
- TypeScript 능숙한 사용
- 5년 이상의 프론트엔드 개발 경험
- Airbridge Attribution Dashboard 프론트엔드 설계 및 구현

---

## Backend 기술 스택

### Primary Language

- **Go** (90% 개발)
- **Python**
  - Flask
  - FastAPI (Flask의 불편함을 해결하기 위해 관심)

### Database & Storage

- **관계형 데이터베이스**: MySQL
- **NoSQL**: Amazon DynamoDB
- **데이터 웨어하우스**: Snowflake
- **검색 엔진**: Elasticsearch
- **캐싱**: Redis

### Data Processing & Streaming

- **메시지 큐**: Apache Kafka
- **빅데이터 처리**:
  - Apache Spark
  - Hadoop
  - Apache Druid

### Cloud & Infrastructure

- **클라우드 플랫폼**: AWS
  - EKS (Elastic Kubernetes Service)
  - ECS (Elastic Container Service)
  - S3
  - DynamoDB
  - CloudMap
- **컨테이너**: Docker
- **오케스트레이션**: Kubernetes
- **IaC (Infrastructure as Code)**: Terraform
- **CDN**: Cloudflare CDN
- **웹 서버**: NGINX

### Backend 팀 특징

- **Data Pipeline Team**:
  - 하루 10억 건 이상의 데이터 처리
  - 하루 100억 트래픽 처리 가능한 시스템 운영
- **요구사항**:
  - 3년 이상 백엔드/데이터 엔지니어링 경험
  - 클라우드 인프라 운영 경험
  - Go 언어 개발 경험
  - Kubernetes 클러스터 운영 경험

---

## Mobile SDK 기술 스택

### iOS

- **언어**: Swift, Objective-C
- **특징**:
  - 이벤트 수집 및 딥링크 기능
  - 직관적인 SDK 인터페이스 제공
  - 안정적인 SDK를 위한 테스트 및 검증

### Android

- **언어**: Kotlin
- **핵심 라이브러리**:
  - JetBrains Kotlin
  - Kotlinx Coroutines (v1.4 이상)
- **빌드 도구**: Gradle
  - fatjar 플러그인 (자체 개발)

### Cross-platform

- **React Native**: airbridge-react-native-sdk (npm)
- **Flutter**: Flutter SDK 지원
- **Unity**: Unity SDK 지원
- **Expo**: Expo 지원

### Web SDK

- **지원 브라우저**: ES5를 지원하는 모든 브라우저
- **언어**: TypeScript

---

## DevOps & CI/CD

### Version Control & CI/CD

- **버전 관리**: Git, GitHub
- **CI/CD**: GitHub Actions
  - gitflow (자체 구현)

### Development Tools

- **HMR**: web-dev-server-hmr-react (자체 개발)
- **기타 도구**:
  - Shell scripts
  - HCL
  - Mustache

---

## 오픈소스 프로젝트

AB180은 GitHub에서 여러 오픈소스 프로젝트를 공개하고 있습니다:

1. **lrmr**: Less-Resilient MapReduce framework for Go
2. **grpc-cloudmap-resolver**: AWS Cloud Map resolver implementation
3. **fatjar**: Gradle plugin for Android library packaging
4. **gitflow**: GitHub Actions workflow implementation
5. **web-dev-server-hmr-react**: HMR plugin for React

---

## 홈페이지 (airbridge.io) 기술

### Identified Technologies (BuiltWith 기준)

- **보안**:
  - SPF (Sender Policy Framework)
  - DNSSEC
  - reCAPTCHA
- **CDN & Optimization**:
  - Cloudflare CDN
  - Cloudflare Website Optimization
- **분석 & 모니터링**:
  - CrUX Dataset (Chrome User Experience Report)
- **고객 지원**:
  - Zendesk Web Widget

총 **45개 이상의 기술**이 airbridge.io 웹사이트에서 사용되고 있습니다.

---

## 사용 언어 요약

AB180의 GitHub 저장소에서 확인된 프로그래밍 언어:

1. **Go** - 백엔드 주력 언어
2. **TypeScript** - 프론트엔드 및 Web SDK
3. **Kotlin** - Android SDK
4. **Swift** - iOS SDK
5. **Python** - 백엔드, 데이터 처리
6. **Java** - 백엔드, Android
7. **C#** - Unity SDK
8. **Dart** - Flutter SDK
9. **Objective-C** - iOS (레거시)
10. **Ruby** - 지원 도구
11. **Rust** - 특정 성능 최적화
12. **JavaScript** - 웹 개발
13. **HTML/CSS** - 웹 프론트엔드
14. **Shell** - 자동화 스크립트
15. **HCL** - Terraform IaC

---

## 개발 문화 & 특징

- **개발 규모**: 직원 약 133명 (2025년 기준)
- **개발 방식**: Trunk-based Development
- **데이터 처리 규모**: 일일 10억 건 이상
- **트래픽 처리**: 하루 100억 트래픽
- **인정받은 개발 문화**: 개발자들이 선호하는 좋은 개발 문화를 가진 기업으로 선정 (11개 항목 중 50% 이상 동의)

---

## 채용 정보

AB180는 다양한 엔지니어링 포지션을 채용 중입니다:

- Frontend Engineer / Team Lead
- Backend Engineer (Platform)
- Backend Engineer (Data Pipeline)
- iOS SDK Engineer
- Android Engineer
- Technical Writer

**채용 사이트**: https://recruit.ab180.co/

---

## 참고 자료

### Official Resources
- [Airbridge 공식 홈페이지](https://www.airbridge.io/)
- [Airbridge Help Center](https://help.airbridge.io/en/guides/getting-started-with-airbridge)
- [AB180 공식 사이트](https://www.ab180.co/en)
- [AB180 GitHub](https://github.com/ab180)
- [AB180 채용 사이트](https://recruit.ab180.co/)

### Technical Documentation
- [Web SDK Documentation](https://help.airbridge.io/en/developers/web-sdk)
- [Airbridge SDK Overview](https://help.airbridge.io/en/developers/airbridge-sdk-overview)
- [React Native SDK](https://help.airbridge.io/en/developers/react-native-sdk-v4)
- [airbridge-web-example GitHub](https://github.com/ab180/airbridge-web-example)

### Engineering Blog & Interviews
- [AB180 Engineering Blog](https://engineering.ab180.co/)
- [Data Pipeline Team Interview](https://engineering.ab180.co/stories/data-pipeline-team-interview)
- [Backend Engineer Interview (Jumpit)](https://team.jumpit.co.kr/3e2e2d63-4874-47b2-a697-f96ce3876360)

### Job Listings
- [Frontend Engineer (Wanted)](https://www.wanted.co.kr/wd/13336)
- [Backend Engineer - Platform](https://recruit.ab180.co/o/94869)
- [Backend Engineer - Data Pipeline](https://recruit.ab180.co/o/91715)
- [iOS SDK Engineer](https://recruit.ab180.co/ko/o/129306)

### Company Information
- [AB180 on Crunchbase](https://www.crunchbase.com/organization/airbridge/technology)
- [AB180 on ZoomInfo](https://www.zoominfo.com/c/airbridge/473884262)
- [AB180 Salespanel Case Study](https://salespanel.io/customers/ab180/)

---

## 결론

Airbridge(AB180)는 **Go, TypeScript, React**를 중심으로 한 현대적인 기술 스택을 사용하고 있으며, AWS 기반의 클라우드 인프라와 Kubernetes를 활용한 대규모 트래픽 처리에 강점을 보이고 있습니다. 특히 하루 100억 건의 트래픽과 10억 건의 데이터를 처리하는 안정적인 시스템을 구축하고 있으며, 다양한 플랫폼을 위한 SDK를 자체 개발하여 제공하고 있습니다.

프론트엔드는 **React + TypeScript + Vite** 조합으로 모던한 개발 환경을 구축했으며, 백엔드는 **Go를 주력 언어**로 사용하면서 높은 성능과 확장성을 확보하고 있습니다. 또한 오픈소스 기여와 자체 도구 개발을 통해 기술적 역량을 지속적으로 향상시키고 있습니다.
