/**
 * 날짜 형식 변환 유틸리티 함수
 * @param {Date|string} date - 변환할 날짜 (Date 객체 또는 문자열)
 * @returns {string} 형식화된 날짜 문자열
 */
export function formatDate(date) {
  if (!date) return '';
  
  // 문자열이면 Date 객체로 변환
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  // 유효한 날짜인지 확인
  if (isNaN(dateObj.getTime())) {
    console.error('유효하지 않은 날짜:', date);
    return '';
  }
  
  // 날짜 형식화
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  
  // 요일 계산
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const weekday = weekdays[dateObj.getDay()];
  
  // 시간 형식화
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  
  // 오전/오후 구분
  const ampm = hours < 12 ? '오전' : '오후';
  const formattedHours = hours % 12 || 12;
  
  // 최종 형식화된 문자열 반환
  return `${year}년 ${month}월 ${day}일 (${weekday}) ${ampm} ${formattedHours}시 ${minutes.toString().padStart(2, '0')}분`;
}
