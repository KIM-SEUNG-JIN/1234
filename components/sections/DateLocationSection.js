import styles from '../../styles/DateLocationSection.module.css';
import { formatDate } from '../../lib/dateUtils';

export default function DateLocationSection({ date, location }) {
  const formattedDate = formatDate(date);
  
  return (
    <section className={styles.dateLocationSection}>
      <h2 className={styles.sectionTitle}>날짜 & 장소</h2>
      
      <div className={styles.dateContainer}>
        <h3 className={styles.dateTitle}>결혼식 날짜</h3>
        <p className={styles.date}>{formattedDate}</p>
      </div>
      
      <div className={styles.locationContainer}>
        <h3 className={styles.locationTitle}>결혼식 장소</h3>
        <p className={styles.locationName}>{location.name}</p>
        <p className={styles.locationAddress}>{location.address}</p>
        <p className={styles.locationTel}>Tel: {location.tel}</p>
        
        <div className={styles.mapContainer}>
          {/* 지도 API 연동 부분 */}
          <div className={styles.map}>
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location.address)}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="결혼식장 위치"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
