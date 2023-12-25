import styles from './ElementsList.module.css'

const ElementsList = () => {
  return (
    <div className={styles.listElements}>
      <div className={`${styles.table} ${styles.ver3}`}>
        <table data-vertable="ver3">
          <thead>
            <tr className={`${styles.rows} ${styles.head}`}>
              <th className={`${styles.columns} ${styles.column1}`} >Id</th>
              <th className={`${styles.columns} ${styles.column2}`} >Referència</th>
              <th className={`${styles.columns} ${styles.column3}`} >Element</th>
              <th className={`${styles.columns} ${styles.column4}`} >Ubicació</th>
              <th className={`${styles.columns} ${styles.column5}`} >Àrea</th>
              <th className={`${styles.columns} ${styles.column6}`} >Empresa</th>
              <th className={`${styles.columns} ${styles.column7}`} >Estat</th>
              <th className={`${styles.columns} ${styles.column8}`} >Accions</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} >Lawrence Scott</td>
              <td className={`${styles.columns} ${styles.column2}`} >8:00 AM</td>
              <td className={`${styles.columns} ${styles.column3}`} >--</td>
              <td className={`${styles.columns} ${styles.column4}`} >--</td>
              <td className={`${styles.columns} ${styles.column5}`} >8:00 AM</td>
              <td className={`${styles.columns} ${styles.column6}`} >--</td>
              <td className={`${styles.columns} ${styles.column7}`} >5:00 PM</td>
              <td className={`${styles.columns} ${styles.column8}`} >8:00 AM</td>
            </tr>            
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} >Jane Medina</td>
              <td className={`${styles.columns} ${styles.column2}`} >--</td>
              <td className={`${styles.columns} ${styles.column3}`} >5:00 PM</td>
              <td className={`${styles.columns} ${styles.column4}`} >5:00 PM</td>
              <td className={`${styles.columns} ${styles.column5}`} >--</td>
              <td className={`${styles.columns} ${styles.column6}`} >9:00 AM</td>
              <td className={`${styles.columns} ${styles.column7}`} >--</td>
              <td className={`${styles.columns} ${styles.column8}`} >--</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} >Billy Mitchell</td>
              <td className={`${styles.columns} ${styles.column2}`} >9:00 AM</td>
              <td className={`${styles.columns} ${styles.column3}`} >--</td>
              <td className={`${styles.columns} ${styles.column4}`} >--</td>
              <td className={`${styles.columns} ${styles.column5}`} >--</td>
              <td className={`${styles.columns} ${styles.column6}`} >--</td>
              <td className={`${styles.columns} ${styles.column7}`} >2:00 PM</td>
              <td className={`${styles.columns} ${styles.column8}`} >8:00 AM</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} >Beverly Reid</td>
              <td className={`${styles.columns} ${styles.column2}`} >--</td>
              <td className={`${styles.columns} ${styles.column3}`} >5:00 PM</td>
              <td className={`${styles.columns} ${styles.column4}`} >5:00 PM</td>
              <td className={`${styles.columns} ${styles.column5}`} >--</td>
              <td className={`${styles.columns} ${styles.column6}`} >9:00 AM</td>
              <td className={`${styles.columns} ${styles.column7}`} >--</td>
              <td className={`${styles.columns} ${styles.column8}`} >--</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} >Tiffany Wade</td>
              <td className={`${styles.columns} ${styles.column2}`} >8:00 AM</td>
              <td className={`${styles.columns} ${styles.column3}`} >--</td>
              <td className={`${styles.columns} ${styles.column4}`} >--</td>
              <td className={`${styles.columns} ${styles.column5}`} >8:00 AM</td>
              <td className={`${styles.columns} ${styles.column6}`} >--</td>
              <td className={`${styles.columns} ${styles.column7}`} >5:00 PM</td>
              <td className={`${styles.columns} ${styles.column8}`} >8:00 AM</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} >Sean Adams</td>
              <td className={`${styles.columns} ${styles.column2}`} >--</td>
              <td className={`${styles.columns} ${styles.column3}`} >5:00 PM</td>
              <td className={`${styles.columns} ${styles.column4}`} >5:00 PM</td>
              <td className={`${styles.columns} ${styles.column5}`} >--</td>
              <td className={`${styles.columns} ${styles.column6}`} >9:00 AM</td>
              <td className={`${styles.columns} ${styles.column7}`} >--</td>
              <td className={`${styles.columns} ${styles.column8}`} >--</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} >Rachel Simpson</td>
              <td className={`${styles.columns} ${styles.column2}`} >9:00 AM</td>
              <td className={`${styles.columns} ${styles.column3}`} >--</td>
              <td className={`${styles.columns} ${styles.column4}`} >--</td>
              <td className={`${styles.columns} ${styles.column5}`} >--</td>
              <td className={`${styles.columns} ${styles.column6}`} >--</td>
              <td className={`${styles.columns} ${styles.column7}`} >2:00 PM</td>
              <td className={`${styles.columns} ${styles.column8}`} >8:00 AM</td>
            </tr>
            <tr className={styles.rows}>
              <td className={`${styles.columns} ${styles.column1}`} >Mark Salazar</td>
              <td className={`${styles.columns} ${styles.column2}`} >8:00 AM</td>
              <td className={`${styles.columns} ${styles.column3}`} >--</td>
              <td className={`${styles.columns} ${styles.column4}`} >--</td>
              <td className={`${styles.columns} ${styles.column5}`} >8:00 AM</td>
              <td className={`${styles.columns} ${styles.column6}`} >--</td>
              <td className={`${styles.columns} ${styles.column7}`} >5:00 PM</td>
              <td className={`${styles.columns} ${styles.column8}`} >
                <abbr title="Editar element"><i class="fa-solid fa-pen-to-square"></i></abbr>
                <abbr title="Eliminar element"><i class="fa-solid fa-trash" ></i></abbr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ElementsList