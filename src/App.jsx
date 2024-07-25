import { useRef, useState } from "react";
import styles from "./App.module.css";

function App() {
  const nameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const companyRef = useRef("");
  const adresRef = useRef("");
  const monthRef = useRef("null");
  const dayRef = useRef("null");
  const yearRef = useRef("null");

  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!nameRef.current.value) newErrors.name = "Iltimos familiangizni kiriting";
    if (!lastNameRef.current.value) newErrors.lastName = "Iltimos ismingizni kiriting";
    
    if (!adresRef.current.value) newErrors.address = "AddresIngizni kiriting";
    if (!monthRef.current.value || monthRef.current.value < 1 || monthRef.current.value > 12) newErrors.month = "Oy 12 oshib ketmasin";
    if (!dayRef.current.value || dayRef.current.value < 1 || dayRef.current.value > 31) newErrors.day = "KUN 31 oshib ketmasin";
    
    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const registr = {
        name: nameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        company: companyRef.current.value,
        address: adresRef.current.value,
        month: monthRef.current.value,
        day: dayRef.current.value,
        year: yearRef.current.value,
      };
      console.log(registr);
      
     
      localStorage.setItem('registr', JSON.stringify(registr));

      
      nameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      companyRef.current.value = "";
      adresRef.current.value = "";
      monthRef.current.value = "";
      dayRef.current.value = "";
      yearRef.current.value = "";
      setErrors({});
    }
  }

  return (
    <div className={styles.container}>
      <form action="">
        <div className={styles.flexName}>
        <div className={styles.inpBox}>
          <label htmlFor="">First Name</label>
          <input ref={nameRef} type="text" placeholder="First Name" />
          { <p>{errors.name}</p>}
        </div>

        <div className={styles.inpBox}>
          <label htmlFor="">Last Name</label>
          <input  ref={lastNameRef} type="text" placeholder="Last Name" />
          { <p>{errors.lastName}</p>}
        </div>
        </div>

        <div className={styles.inpBox}>
          <label htmlFor="">Email address</label>
          <input className={styles.inpBig} ref={emailRef} type="text" placeholder="Email address" />
          { <p>{errors.email}</p>}
        </div>

        <div className={styles.inpBox}>
          <label htmlFor="">Company (if applicable)</label>
          <input className={styles.inpBig} ref={companyRef} type="text" placeholder="Company" />
        </div>

        <div className={styles.inpBox}>
          <label htmlFor="">Physical Address</label>
          <input className={styles.inpBig} ref={adresRef} type="text" placeholder="Physical Address" />
          { <p>{errors.address}</p>}
        </div>

        <div className={styles.inpBigflex}>
          <label htmlFor="">Date of Birth</label>
          <div className={styles.inpMiniFlex}>
            <input className={styles.inpMIni} ref={monthRef} type="number" placeholder="Month" />
            { <p>{errors.month}</p>}
            <input className={styles.inpMIni} ref={dayRef} type="number" placeholder="Day" />
            { <p>{errors.day}</p>}
            <input className={styles.inpMIni} ref={yearRef} type="number" placeholder="Year" />
            { <p>{errors.year}</p>}
          </div>
        </div>

        <button onClick={handleSubmit}>SAVE</button>
      </form>
    </div>
  );
}

export default App;