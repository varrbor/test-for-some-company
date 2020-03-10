import React from 'react';
import Preloader from './preloaders/preloader.jsx';
import styles from '../../styles/module-styles/users.module.css';
import UserInformationContainer from '../containers/userInformation/userInfoContainer.jsx';


export default class extends React.Component {
  state = {
    show: false,
    user: {},
  }

  showInformation = user => {
    if(this.state.show) {
      //чтобы обновлять компонент и делать новый запрос за новым юзером, если компонент уже был создан
      this.close(() => {
        this.setState({
          show: true,
          user: {...user},
        })
      });
    }
    
    else {
      this.setState({
        show: true,
        user: {...user},
      })
    }
  }

  close = callback => {
    let cb = typeof callback === 'function' ? callback : () => {};

    this.setState({
      show: false,
    }, cb)
  }

  scrollCheck = event => {
    if(event.target.scrollTop === 785) {
      event.preventDefault();
    }
  }

  render() {
    if(this.props.users[0] && this.props.users[0].message === "Not Found") {
      return <div>User not found.</div>
    }
    
    else if (this.props.users[0].message > 12) {
      return <div>API rate limit exceeded</div>
    }

    else {
      if(this.props.users) {
        let usersList = this.props.users.map(user => {
            return (
                <div key={user.id} className={styles.user}>
                    <div>
                      <img className={styles.avatar} src={user.avatar_url} />
                    </div>
                    <div className={styles.information}>
                        <div className={styles.element}>
                          <span className={styles.fieldName} > User ID: </span> 
                          <span> {user.id} </span>
                        </div>
                        <div className={styles.element}>
                          <span className={styles.fieldName} > Login: </span> 
                          <span> {user.login} </span>
                        </div>
                        <div className={styles.element}>
                          <span className={styles.fieldName}> Admin: </span> 
                          <span> {user.site_admin ? 'Yes' : 'No'} </span>
                        </div>
                        <div className={styles.element}>
                          <span className={styles.fieldName}> Role: </span> 
                          <span> {user.type} </span>
                        </div>
                        <div className={styles.element}>
                          <span className={styles.fieldName}> GH account: </span> 
                          <span> <a className={styles.fieldName_link} href={user.html_url} target="_blank"> {user.login} </a> </span>
                        </div>
                    </div>
                    <div className={styles.user__more} onClick={this.showInformation.bind(null, user)}>
                      <i className={styles.arrow + ' ' + styles.right}></i>
                    </div>
                </div>
            )
        });

        return (
          <div className={styles.users__information}>
            <div className={styles.users__list}>
              {usersList}
            </div>

            <div className={styles.user__full_info} onScroll={() => this.scrollCheck(event)}>
                { this.state.show ? <UserInformationContainer user={this.state.user}></UserInformationContainer> : false }
            </div>
          </div>
        );
      }

      else {
        return (
          <div>
            <Preloader></Preloader>
          </div>
        )
      }
    }
  }
}
