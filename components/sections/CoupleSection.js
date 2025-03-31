import Image from 'next/image';
import styles from '../../styles/CoupleSection.module.css';

export default function CoupleSection({ brideInfo, groomInfo }) {
  return (
    <section className={styles.coupleSection}>
      <h2 className={styles.sectionTitle}>신랑 & 신부</h2>
      
      <div className={styles.coupleContainer}>
        <div className={styles.person}>
          <div className={styles.imageContainer}>
            {groomInfo.image ? (
              <Image
                src={groomInfo.image}
                alt="신랑 이미지"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div className={styles.placeholder}>
                <span>이미지 없음</span>
              </div>
            )}
          </div>
          <h3 className={styles.name}>{groomInfo.name}</h3>
          <p className={styles.contact}>{groomInfo.phone}</p>
          
          <div className={styles.parents}>
            {groomInfo.parents && groomInfo.parents.map((parent, index) => (
              <p key={index} className={styles.parent}>
                <span className={styles.relation}>{parent.relation}</span>
                <span className={styles.parentName}>{parent.name}</span>
              </p>
            ))}
          </div>
        </div>
        
        <div className={styles.divider}>
          <span className={styles.heart}>♥</span>
        </div>
        
        <div className={styles.person}>
          <div className={styles.imageContainer}>
            {brideInfo.image ? (
              <Image
                src={brideInfo.image}
                alt="신부 이미지"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div className={styles.placeholder}>
                <span>이미지 없음</span>
              </div>
            )}
          </div>
          <h3 className={styles.name}>{brideInfo.name}</h3>
          <p className={styles.contact}>{brideInfo.phone}</p>
          
          <div className={styles.parents}>
            {brideInfo.parents && brideInfo.parents.map((parent, index) => (
              <p key={index} className={styles.parent}>
                <span className={styles.relation}>{parent.relation}</span>
                <span className={styles.parentName}>{parent.name}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
