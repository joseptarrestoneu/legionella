import styles from './ElementsList.module.css'

const ElementsList = () => {
  return (
    <div className={styles.listElements}>
      <div className={`${styles.table} ${styles.ver3}`}>
        <table data-vertable="ver3">
          <thead>
            <tr className={`${styles.rows} ${styles.head}`}>
              <th className={`${styles.columns} ${styles.column1}`} data-column="column1">Id</th>
              <th className={`${styles.columns} ${styles.column2}`} data-column="column2">Referència</th>
              <th className={`${styles.columns} ${styles.column3}`} data-column="column3">Element</th>
              <th className={`${styles.columns} ${styles.column4}`} data-column="column4">Ubicació</th>
              <th className={`${styles.columns} ${styles.column5}`} data-column="column5">Àrea</th>
              <th className={`${styles.columns} ${styles.column6}`} data-column="column6">Empresa</th>
              <th className={`${styles.columns} ${styles.column7}`} data-column="column7">Estat</th>
              <th className={`${styles.columns} ${styles.column8}`} data-column="column8">Accions</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} data-column="column1">Lawrence Scott</td>
              <td className={`${styles.columns} ${styles.column2}`} data-column="column2">8:00 AM</td>
              <td className={`${styles.columns} ${styles.column3}`} data-column="column3">--</td>
              <td className={`${styles.columns} ${styles.column4}`} data-column="column4">--</td>
              <td className={`${styles.columns} ${styles.column5}`} data-column="column5">8:00 AM</td>
              <td className={`${styles.columns} ${styles.column6}`} data-column="column6">--</td>
              <td className={`${styles.columns} ${styles.column7}`} data-column="column7">5:00 PM</td>
              <td className={`${styles.columns} ${styles.column8}`} data-column="column8">8:00 AM</td>
            </tr>            
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} data-column="column1">Jane Medina</td>
              <td className={`${styles.columns} ${styles.column2}`} data-column="column2">--</td>
              <td className={`${styles.columns} ${styles.column3}`} data-column="column3">5:00 PM</td>
              <td className={`${styles.columns} ${styles.column4}`} data-column="column4">5:00 PM</td>
              <td className={`${styles.columns} ${styles.column5}`} data-column="column5">--</td>
              <td className={`${styles.columns} ${styles.column6}`} data-column="column6">9:00 AM</td>
              <td className={`${styles.columns} ${styles.column7}`} data-column="column7">--</td>
              <td className={`${styles.columns} ${styles.column8}`} data-column="column8">--</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} data-column="column1">Billy Mitchell</td>
              <td className={`${styles.columns} ${styles.column2}`} data-column="column2">9:00 AM</td>
              <td className={`${styles.columns} ${styles.column3}`} data-column="column3">--</td>
              <td className={`${styles.columns} ${styles.column4}`} data-column="column4">--</td>
              <td className={`${styles.columns} ${styles.column5}`} data-column="column5">--</td>
              <td className={`${styles.columns} ${styles.column6}`} data-column="column6">--</td>
              <td className={`${styles.columns} ${styles.column7}`} data-column="column7">2:00 PM</td>
              <td className={`${styles.columns} ${styles.column8}`} data-column="column8">8:00 AM</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} data-column="column1">Beverly Reid</td>
              <td className={`${styles.columns} ${styles.column2}`} data-column="column2">--</td>
              <td className={`${styles.columns} ${styles.column3}`} data-column="column3">5:00 PM</td>
              <td className={`${styles.columns} ${styles.column4}`} data-column="column4">5:00 PM</td>
              <td className={`${styles.columns} ${styles.column5}`} data-column="column5">--</td>
              <td className={`${styles.columns} ${styles.column6}`} data-column="column6">9:00 AM</td>
              <td className={`${styles.columns} ${styles.column7}`} data-column="column7">--</td>
              <td className={`${styles.columns} ${styles.column8}`} data-column="column8">--</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} data-column="column1">Tiffany Wade</td>
              <td className={`${styles.columns} ${styles.column2}`} data-column="column2">8:00 AM</td>
              <td className={`${styles.columns} ${styles.column3}`} data-column="column3">--</td>
              <td className={`${styles.columns} ${styles.column4}`} data-column="column4">--</td>
              <td className={`${styles.columns} ${styles.column5}`} data-column="column5">8:00 AM</td>
              <td className={`${styles.columns} ${styles.column6}`} data-column="column6">--</td>
              <td className={`${styles.columns} ${styles.column7}`} data-column="column7">5:00 PM</td>
              <td className={`${styles.columns} ${styles.column8}`} data-column="column8">8:00 AM</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} data-column="column1">Sean Adams</td>
              <td className={`${styles.columns} ${styles.column2}`} data-column="column2">--</td>
              <td className={`${styles.columns} ${styles.column3}`} data-column="column3">5:00 PM</td>
              <td className={`${styles.columns} ${styles.column4}`} data-column="column4">5:00 PM</td>
              <td className={`${styles.columns} ${styles.column5}`} data-column="column5">--</td>
              <td className={`${styles.columns} ${styles.column6}`} data-column="column6">9:00 AM</td>
              <td className={`${styles.columns} ${styles.column7}`} data-column="column7">--</td>
              <td className={`${styles.columns} ${styles.column8}`} data-column="column8">--</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} data-column="column1">Rachel Simpson</td>
              <td className={`${styles.columns} ${styles.column2}`} data-column="column2">9:00 AM</td>
              <td className={`${styles.columns} ${styles.column3}`} data-column="column3">--</td>
              <td className={`${styles.columns} ${styles.column4}`} data-column="column4">--</td>
              <td className={`${styles.columns} ${styles.column5}`} data-column="column5">--</td>
              <td className={`${styles.columns} ${styles.column6}`} data-column="column6">--</td>
              <td className={`${styles.columns} ${styles.column7}`} data-column="column7">2:00 PM</td>
              <td className={`${styles.columns} ${styles.column8}`} data-column="column8">8:00 AM</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} data-column="column1">Mark Salazar</td>
              <td className={`${styles.columns} ${styles.column2}`} data-column="column2">8:00 AM</td>
              <td className={`${styles.columns} ${styles.column3}`} data-column="column3">--</td>
              <td className={`${styles.columns} ${styles.column4}`} data-column="column4">--</td>
              <td className={`${styles.columns} ${styles.column5}`} data-column="column5">8:00 AM</td>
              <td className={`${styles.columns} ${styles.column6}`} data-column="column6">--</td>
              <td className={`${styles.columns} ${styles.column7}`} data-column="column7">5:00 PM</td>
              <td className={`${styles.columns} ${styles.column8}`} data-column="column8">8:00 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ElementsList