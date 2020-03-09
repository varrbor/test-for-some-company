import React from 'react';
import styles from '../../styles/module-styles/search.module.css';

export default class extends React.Component {
  getUserName = (event) => {
    this.props.updateUserList(event.target.value, this.props.users);
  }

  render() {
    return (
      <div className={styles.search__panel}>
        <img className={styles.search__icon} src="dist/img/search.png" alt="Search icon" />
        <input className={styles.search__field} type="text" onChange={this.getUserName} />
      </div>
    )
  }
}
