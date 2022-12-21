import styles from "./Forms.module.scss";
export const SubmitButton = ({ text }: { text: string }) => {
  return (
    <button type="submit" className={styles.submit}>
      <span>{text}</span>
    </button>
  );
};
