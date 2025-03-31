import Image from 'next/image';
import styles from '../../styles/GallerySection.module.css';

export default function GallerySection({ images = [] }) {
  if (!images || images.length === 0) {
    return (
      <section className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>갤러리</h2>
        <p className={styles.emptyMessage}>등록된 이미지가 없습니다.</p>
      </section>
    );
  }
  
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.sectionTitle}>갤러리</h2>
      
      <div className={styles.galleryGrid}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageItem}>
            <div className={styles.imageContainer}>
              <Image
                src={image.url || image}
                alt={image.alt || `갤러리 이미지 ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
