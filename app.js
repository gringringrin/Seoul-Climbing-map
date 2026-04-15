const SEOUL_BOUNDS = {
  north: 37.7151,
  south: 37.4133,
  west: 126.7341,
  east: 127.2693
};

const districtLabels = [
  { name: "은평·서대문", lat: 37.612, lng: 126.932 },
  { name: "마포", lat: 37.556, lng: 126.912 },
  { name: "종로·중구", lat: 37.571, lng: 126.995 },
  { name: "성동", lat: 37.548, lng: 127.041 },
  { name: "용산", lat: 37.533, lng: 126.987 },
  { name: "구로·영등포", lat: 37.521, lng: 126.897 },
  { name: "강서", lat: 37.561, lng: 126.842 },
  { name: "관악", lat: 37.479, lng: 126.946 },
  { name: "강남", lat: 37.501, lng: 127.036 },
  { name: "송파·강동", lat: 37.521, lng: 127.112 }
];

const gyms = [
  {
    id: "theclimb-yeonnam",
    name: "더클라임 연남점",
    brand: "The Climb",
    district: "마포구",
    address: "서울 마포구 양화로 186 LC TOWER 3층",
    lat: 37.5578,
    lng: 126.9245,
    summary: "홍대입구역 인근 대형 볼더링 짐.",
    price: "일일 22,000원 / 5회 90,000원 / 10회 170,000원",
    hours: "평일 07:30~24:00 / 주말 07:30~22:00",
    event: "인스타그램 공지 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://theclimb.co.kr",
    instagramUrl: "https://www.instagram.com/explore/tags/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%EC%97%B0%EB%82%A8%EC%A0%90/",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%97%B0%EB%82%A8%EC%A0%90"
  },
  {
    id: "theclimb-hongdae-b",
    name: "더클라임 홍대B점",
    brand: "The Climb",
    district: "마포구",
    address: "서울 마포구 양화로 125 경남관광빌딩 2층",
    lat: 37.5555,
    lng: 126.9228,
    summary: "홍대 메인 상권 접근성이 좋은 지점.",
    price: "일일 22,000원 / 평일권 110,000원 / 10회 170,000원",
    hours: "평일 10:00~23:00 / 주말 10:00~20:00",
    event: "인스타그램 공지 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://theclimb.co.kr",
    instagramUrl: "https://www.instagram.com/explore/tags/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%ED%99%8D%EB%8C%80/",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%ED%99%8D%EB%8C%80B%EC%A0%90"
  },
  {
    id: "theclimb-magok",
    name: "더클라임 마곡점",
    brand: "The Climb",
    district: "강서구",
    address: "서울 강서구 마곡동로 62 마곡사이언스타워 7층",
    lat: 37.5606,
    lng: 126.8276,
    summary: "강서권에서 접근성이 좋은 체인 지점.",
    price: "일일 22,000원 / 평일권 110,000원 / 10회 170,000원",
    hours: "평일 08:00~24:00 / 주말 08:00~22:00",
    event: "공식 공지 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://theclimb.co.kr",
    instagramUrl: "https://www.instagram.com/explore/tags/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%EB%A7%88%EA%B3%A1/",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EB%A7%88%EA%B3%A1%EC%A0%90"
  },
  {
    id: "theclimb-yangjae",
    name: "더클라임 양재점",
    brand: "The Climb",
    district: "강남구",
    address: "서울 강남구 남부순환로 2615 지하 1층",
    lat: 37.4842,
    lng: 127.0347,
    summary: "양재역 인근 지점.",
    price: "일일 22,000원 / 5회 100,000원 / 10회 190,000원",
    hours: "평일 10:00~23:00 / 주말 10:00~20:00",
    event: "공식 공지 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://theclimb.co.kr",
    instagramUrl: "https://www.instagram.com/explore/tags/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%EC%96%91%EC%9E%AC/",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%96%91%EC%9E%AC%EC%A0%90"
  },
  {
    id: "theclimb-sinsa",
    name: "더클라임 신사점",
    brand: "The Climb",
    district: "강남구",
    address: "서울 강남구 도산대로17길 9 지하 1층",
    lat: 37.5185,
    lng: 127.0223,
    summary: "가로수길 생활권의 비교적 새 지점.",
    price: "일일 22,000원 / 체인 공통 회차권 사용",
    hours: "평일 10:00~23:00 / 주말 10:00~20:00",
    event: "공식 인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://theclimb.co.kr",
    instagramUrl: "https://www.instagram.com/explore/tags/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%EC%8B%A0%EC%82%AC/",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%8B%A0%EC%82%AC%EC%A0%90"
  },
  {
    id: "theclimb-seouldae",
    name: "더클라임 서울대점",
    brand: "The Climb",
    district: "관악구",
    address: "서울 관악구 남부순환로 1801 지하 1층",
    lat: 37.4815,
    lng: 126.9522,
    summary: "서울대입구역 인근 대표 지점.",
    price: "일일 22,000원 / 5회 100,000원 / 10회 190,000원",
    hours: "평일 10:00~23:00 / 주말 10:00~20:00",
    event: "공식 인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://theclimb.co.kr",
    instagramUrl: "https://www.instagram.com/explore/tags/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%EC%84%9C%EC%9A%B8%EB%8C%80/",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%84%9C%EC%9A%B8%EB%8C%80%EC%A0%90"
  },
  {
    id: "theclimb-sadang",
    name: "더클라임 사당점",
    brand: "The Climb",
    district: "동작구",
    address: "서울 동작구 동작대로 43 3층",
    lat: 37.4845,
    lng: 126.9818,
    summary: "사당역 생활권에서 접근성이 좋은 지점.",
    price: "일일 22,000원 / 체인 공통 회차권 사용",
    hours: "평일 10:00~23:00 / 주말 10:00~20:00",
    event: "공식 인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://theclimb.co.kr",
    instagramUrl: "https://www.instagram.com/explore/tags/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%EC%82%AC%EB%8B%B9/",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9E%84%20%EC%82%AC%EB%8B%B9%EC%A0%90"
  },
  {
    id: "hook-seongsu",
    name: "훅클라이밍 성수점",
    brand: "Hook Climbing",
    district: "성동구",
    address: "서울 성동구 성수일로12길 34 3층",
    lat: 37.5449,
    lng: 127.0545,
    summary: "성수권 대표 지점.",
    price: "일일 20,000원 / 5회 80,000원 / 10회 170,000원",
    hours: "평일 12:00~23:00 / 주말 10:00~20:00",
    event: "공식 사이트와 인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://www.hookclimbing.com/",
    instagramUrl: "https://www.instagram.com/explore/tags/%ED%9B%85%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%EC%84%B1%EC%88%98/",
    naverUrl: "https://map.naver.com/p/search/%ED%9B%85%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%20%EC%84%B1%EC%88%98%EC%A0%90"
  },
  {
    id: "hook-wangsimni",
    name: "훅클라이밍 왕십리점",
    brand: "Hook Climbing",
    district: "성동구",
    address: "서울 성동구 고산자로6길 40 2층",
    lat: 37.5613,
    lng: 127.0386,
    summary: "왕십리역 생활권 지점.",
    price: "일일 20,000원 / 5회 80,000원 / 10회 170,000원 / 체험 30,000원",
    hours: "평일 10:00~23:00 / 주말 10:00~20:00",
    event: "공식 사이트와 인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://www.hookclimbing.com/",
    instagramUrl: "https://www.instagram.com/explore/tags/%ED%9B%85%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%EC%99%95%EC%8B%AD%EB%A6%AC/",
    naverUrl: "https://map.naver.com/p/search/%ED%9B%85%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%20%EC%99%95%EC%8B%AD%EB%A6%AC%EC%A0%90"
  },
  {
    id: "peakers-jongro",
    name: "PEAKERS 종로",
    brand: "PEAKERS",
    district: "종로구",
    address: "서울 종로구 돈화문로 30 CGV피카디리1958",
    lat: 37.5704,
    lng: 126.9912,
    summary: "피카디리1958 안에 있는 체인 1호점.",
    price: "일일권·체험권·정기권 운영",
    hours: "지점 공지 확인",
    event: "대회 및 행사 공지 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://www.instagram.com/explore/tags/peakers%EC%A2%85%EB%A1%9C/",
    instagramUrl: "https://www.instagram.com/explore/tags/peakers%EC%A2%85%EB%A1%9C/",
    naverUrl: "https://map.naver.com/p/search/PEAKERS%20%EC%A2%85%EB%A1%9C"
  },
  {
    id: "peakers-guro",
    name: "PEAKERS 구로",
    brand: "PEAKERS",
    district: "구로구",
    address: "서울 구로구 구로중앙로 152 CGV구로",
    lat: 37.5015,
    lng: 126.8823,
    summary: "대회 운영이 가능한 규모감 있는 지점.",
    price: "일일권·체험권·정기권 운영",
    hours: "지점 공지 확인",
    event: "행사·대회 공지 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://www.instagram.com/explore/tags/peakers%EA%B5%AC%EB%A1%9C/",
    instagramUrl: "https://www.instagram.com/explore/tags/peakers%EA%B5%AC%EB%A1%9C/",
    naverUrl: "https://map.naver.com/p/search/PEAKERS%20%EA%B5%AC%EB%A1%9C"
  },
  {
    id: "peakers-sinchon",
    name: "PEAKERS 신촌",
    brand: "PEAKERS",
    district: "서대문구",
    address: "서울 서대문구 신촌로 129 CGV신촌아트레온 11층",
    lat: 37.5560,
    lng: 126.9402,
    summary: "아트레온 상층부에 있는 비교적 컴팩트한 지점.",
    price: "일일권·체험권·정기권 운영",
    hours: "지점 공지 확인",
    event: "행사 공지 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://www.instagram.com/explore/tags/peakers%EC%8B%A0%EC%B4%8C/",
    instagramUrl: "https://www.instagram.com/explore/tags/peakers%EC%8B%A0%EC%B4%8C/",
    naverUrl: "https://map.naver.com/p/search/PEAKERS%20%EC%8B%A0%EC%B4%8C"
  },
  {
    id: "climbingpark-jongro",
    name: "클라이밍파크 종로점",
    brand: "Climbing Park",
    district: "종로구",
    address: "서울 종로구 종로 199 한일빌딩 지하 2층",
    lat: 37.5708,
    lng: 127.0016,
    summary: "종로5가 인근 지점.",
    price: "일일 20,000원 / 체험 30,000원 / 암벽화 대여 5,000원",
    hours: "평일 10:00~23:00 / 주말 10:00~20:00",
    event: "링크트리와 인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://linktr.ee/Climbing_Park",
    instagramUrl: "https://www.instagram.com/explore/tags/%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%ED%8C%8C%ED%81%AC%EC%A2%85%EB%A1%9C/",
    naverUrl: "https://map.naver.com/p/search/%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%ED%8C%8C%ED%81%AC%20%EC%A2%85%EB%A1%9C%EC%A0%90"
  },
  {
    id: "climbingpark-gangnam",
    name: "클라이밍파크 강남점",
    brand: "Climbing Park",
    district: "강남구",
    address: "서울 강남구 강남대로 364 지하 1층",
    lat: 37.4984,
    lng: 127.0283,
    summary: "강남역 중심권 지점.",
    price: "일일 20,000원 / 체험 30,000원 / 1개월 130,000원",
    hours: "평일 09:00~23:00 / 주말 10:00~21:00",
    event: "링크트리와 인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://linktr.ee/Climbing_Park",
    instagramUrl: "https://www.instagram.com/explore/tags/%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%ED%8C%8C%ED%81%AC%EA%B0%95%EB%82%A8/",
    naverUrl: "https://map.naver.com/p/search/%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%ED%8C%8C%ED%81%AC%20%EA%B0%95%EB%82%A8%EC%A0%90"
  }
];
const moreGyms = [
  {
    id: "climbingpark-hanti",
    name: "클라이밍파크 한티점",
    brand: "Climbing Park",
    district: "강남구",
    address: "서울 강남구 선릉로 324 SH타워 지하 3층",
    lat: 37.4981,
    lng: 127.0527,
    summary: "한티역 인근 지점.",
    price: "일일 20,000원 / 5회 90,000원 / 10회 160,000원",
    hours: "평일 10:00~23:00 / 주말 10:00~20:00",
    event: "링크트리와 인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://linktr.ee/Climbing_Park",
    instagramUrl: "https://www.instagram.com/explore/tags/%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%ED%8C%8C%ED%81%AC%ED%95%9C%ED%8B%B0/",
    naverUrl: "https://map.naver.com/p/search/%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%ED%8C%8C%ED%81%AC%20%ED%95%9C%ED%8B%B0%EC%A0%90"
  },
  {
    id: "climbingpark-sinnonhyeon",
    name: "클라이밍파크 신논현점",
    brand: "Climbing Park",
    district: "강남구",
    address: "서울 강남구 강남대로 468",
    lat: 37.5045,
    lng: 127.0258,
    summary: "신논현역 바로 인근 지점.",
    price: "일일 20,000원대 / 체험권 운영",
    hours: "지점 공지 확인",
    event: "인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://linktr.ee/Climbing_Park",
    instagramUrl: "https://www.instagram.com/explore/tags/%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%ED%8C%8C%ED%81%AC%EC%8B%A0%EB%85%BC%ED%98%84/",
    naverUrl: "https://map.naver.com/p/search/%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%ED%8C%8C%ED%81%AC%20%EC%8B%A0%EB%85%BC%ED%98%84%EC%A0%90"
  },
  {
    id: "climbingpark-seongsu",
    name: "클라이밍파크 성수점",
    brand: "Climbing Park",
    district: "성동구",
    address: "서울 성동구 연무장13길 7",
    lat: 37.5430,
    lng: 127.0525,
    summary: "성수의 대형 매장형 지점.",
    price: "일일 20,000원대 / 카페형 공간",
    hours: "지점 공지 확인",
    event: "링크트리와 인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://linktr.ee/Climbing_Park",
    instagramUrl: "https://www.instagram.com/explore/tags/%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%ED%8C%8C%ED%81%AC%EC%84%B1%EC%88%98/",
    naverUrl: "https://map.naver.com/p/search/%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D%ED%8C%8C%ED%81%AC%20%EC%84%B1%EC%88%98%EC%A0%90"
  },
  {
    id: "offthewall-itaewon",
    name: "오프더월클라이밍",
    brand: "Off The Wall",
    district: "용산구",
    address: "서울 용산구 이태원로 190 지하 2층",
    lat: 37.5348,
    lng: 126.9948,
    summary: "이태원역 인근 지점.",
    price: "일일 20,000원 / 체험 30,000원 / 암벽화 대여 5,000원",
    hours: "평일 11:00~23:00 / 주말 10:00~20:00",
    event: "인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://www.instagram.com/explore/tags/%EC%98%A4%ED%94%84%EB%8D%94%EC%9B%94%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D/",
    instagramUrl: "https://www.instagram.com/explore/tags/%EC%98%A4%ED%94%84%EB%8D%94%EC%9B%94%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D/",
    naverUrl: "https://map.naver.com/p/search/%EC%98%A4%ED%94%84%EB%8D%94%EC%9B%94%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D"
  },
  {
    id: "seoul-boulders",
    name: "서울볼더스",
    brand: "Seoul Boulders",
    district: "영등포구",
    address: "서울 영등포구 양평로28마길 7 3층",
    lat: 37.5384,
    lng: 126.8936,
    summary: "선유도역 인근 독립 짐.",
    price: "일일 20,000원 / 3회 50,000원",
    hours: "평일 12:00~23:00 / 주말 12:00~19:00",
    event: "인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://www.instagram.com/explore/tags/%EC%84%9C%EC%9A%B8%EB%B3%BC%EB%8D%94%EC%8A%A4/",
    instagramUrl: "https://www.instagram.com/explore/tags/%EC%84%9C%EC%9A%B8%EB%B3%BC%EB%8D%94%EC%8A%A4/",
    naverUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EB%B3%BC%EB%8D%94%EC%8A%A4"
  },
  {
    id: "ace-climbing",
    name: "에이스 클라이밍",
    brand: "Ace Climbing",
    district: "구로구",
    address: "서울 구로구 가마산로27길 14 지하 1층",
    lat: 37.4860,
    lng: 126.8974,
    summary: "대림역 생활권의 실내 암장.",
    price: "지점 공지 확인",
    hours: "평일 10:00~23:00 / 주말 10:00~20:00",
    event: "네이버지도와 인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://map.naver.com/p/search/%EC%97%90%EC%9D%B4%EC%8A%A4%20%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D",
    instagramUrl: "https://www.instagram.com/explore/tags/%EC%97%90%EC%9D%B4%EC%8A%A4%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D/",
    naverUrl: "https://map.naver.com/p/search/%EC%97%90%EC%9D%B4%EC%8A%A4%20%ED%81%B4%EB%9D%BC%EC%9D%B4%EB%B0%8D"
  },
  {
    id: "studio-boulder",
    name: "스튜디오 볼더",
    brand: "Studio Boulder",
    district: "구로구",
    address: "서울 구로구 디지털로33길 11 101호",
    lat: 37.4846,
    lng: 126.8961,
    summary: "구로디지털단지 인근의 독립 짐.",
    price: "지점 공지 확인",
    hours: "평일 11:00~23:00 / 토 11:00~22:00 / 일 11:00~21:00",
    event: "인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://map.naver.com/p/search/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%20%EB%B3%BC%EB%8D%94",
    instagramUrl: "https://www.instagram.com/explore/tags/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EB%B3%BC%EB%8D%94/",
    naverUrl: "https://map.naver.com/p/search/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%20%EB%B3%BC%EB%8D%94"
  },
  {
    id: "the-plastik-yeomchang",
    name: "더플라스틱 염창",
    brand: "The Plastik",
    district: "강서구",
    address: "서울 강서구 공항대로81길 27 1층",
    lat: 37.5472,
    lng: 126.8727,
    summary: "염창역 인근의 감도 높은 인테리어 지점.",
    price: "일일 20,000원 / 1개월 130,000원 / 체험 30,000원",
    hours: "평일 12:00~24:00 / 주말 10:00~22:00",
    event: "인스타그램 확인",
    crowd: "네이버지도 링크에서 확인",
    officialUrl: "https://www.instagram.com/explore/tags/%EB%8D%94%ED%94%8C%EB%9D%BC%EC%8A%A4%ED%8B%B1%EC%97%BC%EC%B0%BD/",
    instagramUrl: "https://www.instagram.com/explore/tags/%EB%8D%94%ED%94%8C%EB%9D%BC%EC%8A%A4%ED%8B%B1%EC%97%BC%EC%B0%BD/",
    naverUrl: "https://map.naver.com/p/search/%EB%8D%94%ED%94%8C%EB%9D%BC%EC%8A%A4%ED%8B%B1%20%EC%97%BC%EC%B0%BD"
  }
];

gyms.push(...moreGyms);

const searchInput = document.querySelector("#searchInput");
const districtFilter = document.querySelector("#districtFilter");
const brandFilter = document.querySelector("#brandFilter");
const gymList = document.querySelector("#gymList");
const resultCount = document.querySelector("#resultCount");
const gymCardTemplate = document.querySelector("#gymCardTemplate");
const resetViewButton = document.querySelector("#resetViewButton");
const markerLayer = document.querySelector("#markerLayer");
const districtLayer = document.querySelector("#districtLayer");
const mapTooltip = document.querySelector("#mapTooltip");
const mapNode = document.querySelector("#map");

function fillSelectOptions(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

fillSelectOptions(districtFilter, [...new Set(gyms.map((gym) => gym.district))].sort((a, b) => a.localeCompare(b, "ko")));
fillSelectOptions(brandFilter, [...new Set(gyms.map((gym) => gym.brand))].sort((a, b) => a.localeCompare(b, "en")));

function buildActionLink(label, url) {
  const anchor = document.createElement("a");
  anchor.className = "action-link";
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  anchor.textContent = label;
  return anchor;
}

function normalize(value) { return value.toLowerCase().trim(); }

function getFilteredGyms() {
  const search = normalize(searchInput.value);
  const district = districtFilter.value;
  const brand = brandFilter.value;
  return gyms.filter((gym) => {
    const matchesSearch = !search || [gym.name, gym.brand, gym.district, gym.address, gym.summary].join(" ").toLowerCase().includes(search);
    const matchesDistrict = district === "all" || gym.district === district;
    const matchesBrand = brand === "all" || gym.brand === brand;
    return matchesSearch && matchesDistrict && matchesBrand;
  });
}

function projectToMap(lat, lng) {
  const x = ((lng - SEOUL_BOUNDS.west) / (SEOUL_BOUNDS.east - SEOUL_BOUNDS.west)) * 100;
  const y = ((SEOUL_BOUNDS.north - lat) / (SEOUL_BOUNDS.north - SEOUL_BOUNDS.south)) * 100;
  return { x, y };
}

function renderDistrictLabels() {
  districtLayer.replaceChildren();
  districtLabels.forEach((label) => {
    const node = document.createElement("div");
    node.className = "district-label";
    node.textContent = label.name;
    const { x, y } = projectToMap(label.lat, label.lng);
    node.style.left = `${x}%`;
    node.style.top = `${y}%`;
    districtLayer.append(node);
  });
}

function showTooltip(gym, marker) {
  const { x, y } = projectToMap(gym.lat, gym.lng);
  mapTooltip.hidden = false;
  mapTooltip.innerHTML = "";
  const title = document.createElement("h3");
  title.textContent = gym.name;
  const body = document.createElement("p");
  body.textContent = `${gym.district} · ${gym.price}`;
  mapTooltip.append(title, body);
  mapTooltip.style.left = `clamp(16px, calc(${x}% + 18px), calc(100% - 340px))`;
  mapTooltip.style.top = `clamp(16px, calc(${y}% - 26px), calc(100% - 120px))`;
  document.querySelectorAll(".map-marker").forEach((node) => node.classList.remove("is-active"));
  marker.classList.add("is-active");
}

function renderMarkers(filteredGyms) {
  markerLayer.replaceChildren();
  mapTooltip.hidden = true;
  filteredGyms.forEach((gym) => {
    const marker = document.createElement("button");
    marker.type = "button";
    marker.className = "map-marker";
    marker.setAttribute("aria-label", gym.name);
    const { x, y } = projectToMap(gym.lat, gym.lng);
    marker.style.left = `${x}%`;
    marker.style.top = `${y}%`;
    marker.addEventListener("click", () => {
      showTooltip(gym, marker);
      const cards = [...document.querySelectorAll(".gym-card")];
      const targetCard = cards.find((card) => card.querySelector(".gym-card__name")?.textContent === gym.name);
      targetCard?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    markerLayer.append(marker);
  });
}

function renderGyms(filteredGyms) {
  gymList.replaceChildren();
  resultCount.textContent = `${filteredGyms.length}곳`;
  if (!filteredGyms.length) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "조건에 맞는 센터가 없습니다. 검색어나 필터를 조정해 보세요.";
    gymList.append(emptyState);
    return;
  }
  filteredGyms.forEach((gym) => {
    const fragment = gymCardTemplate.content.cloneNode(true);
    fragment.querySelector(".gym-card__brand").textContent = gym.brand;
    fragment.querySelector(".gym-card__name").textContent = gym.name;
    fragment.querySelector(".gym-card__district").textContent = gym.district;
    fragment.querySelector(".gym-card__address").textContent = gym.address;
    fragment.querySelector(".gym-card__summary").textContent = gym.summary;
    fragment.querySelector(".gym-card__price").textContent = gym.price;
    fragment.querySelector(".gym-card__hours").textContent = gym.hours;
    fragment.querySelector(".gym-card__event").textContent = gym.event;
    fragment.querySelector(".gym-card__crowd").textContent = gym.crowd;
    const actions = fragment.querySelector(".gym-card__actions");
    actions.append(buildActionLink("네이버지도", gym.naverUrl), buildActionLink("행사 확인", gym.instagramUrl), buildActionLink("공식", gym.officialUrl));
    gymList.append(fragment);
  });
}

function updateView() {
  const filteredGyms = getFilteredGyms();
  renderGyms(filteredGyms);
  renderMarkers(filteredGyms);
}

searchInput.addEventListener("input", updateView);
districtFilter.addEventListener("change", updateView);
brandFilter.addEventListener("change", updateView);
resetViewButton.addEventListener("click", () => {
  searchInput.value = "";
  districtFilter.value = "all";
  brandFilter.value = "all";
  updateView();
});

mapNode.addEventListener("click", (event) => {
  if (event.target === mapNode) {
    mapTooltip.hidden = true;
    document.querySelectorAll(".map-marker").forEach((node) => node.classList.remove("is-active"));
  }
});

renderDistrictLabels();
updateView();
