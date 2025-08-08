import styles from "./SkillsStyles.module.css";
import checkDark from "../../assets/checkmark-dark.svg";
import checkLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkIcon = theme === "light" ? checkLight : checkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
       <div className={styles.skillList}>
        <SkillList src={checkIcon} skill=" Java " />
        <SkillList src={checkIcon} skill=" Git " />
        <SkillList src={checkIcon} skill=" Data Structures " />
        <SkillList src={checkIcon} skill=" RDBMS " />
        <SkillList src={checkIcon} skill=" OOP Concepts " />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkIcon} skill="HTML" />
        <SkillList src={checkIcon} skill="CSS" />
        <SkillList src={checkIcon} skill="JavaScript" />
      </div>     
      <hr />
    </section>
  );
}
export default Skills;
