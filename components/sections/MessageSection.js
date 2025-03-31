import styles from '../../styles/MessageSection.module.css';

export default function MessageSection({ messages = [] }) {
  if (!messages || messages.length === 0) {
    return (
      <section className={styles.messageSection}>
        <h2 className={styles.sectionTitle}>축하 메시지</h2>
        <p className={styles.emptyMessage}>등록된 메시지가 없습니다.</p>
      </section>
    );
  }
  
  return (
    <section className={styles.messageSection}>
      <h2 className={styles.sectionTitle}>축하 메시지</h2>
      
      <div className={styles.messageList}>
        {messages.map((message, index) => (
          <div key={index} className={styles.messageItem}>
            <div className={styles.messageHeader}>
              <h3 className={styles.messageSender}>{message.sender}</h3>
              <span className={styles.messageDate}>{new Date(message.date).toLocaleDateString()}</span>
            </div>
            <p className={styles.messageContent}>{message.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
