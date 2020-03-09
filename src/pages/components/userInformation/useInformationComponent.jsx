import React from 'react';
import style from '../../../styles/module-styles/userInformation.module.css';

import Accordion from '../accordion/accordion.jsx';

export default class extends React.Component {
  render() {
    let data = [
      {
        name: 'followers',
        title: "Followers", 
        content: '',
      },
      {
        name: 'orgs',
        title: "Organizations", 
        content: '',
      },
      {
        name: 'repos',
        title: "Repositories", 
        content: '',
      },
      {
        name: 'subscr',
        title: "Subscriptions", 
        content: '',
      },
    ];

    for(let i = 0; i < data.length; i++) {
      data[i].content = this.props.userInfo[data[i].name].map((user, index) => {
        if(data[i].name === 'followers' && this.props.userInfo.followers.length !== 0) {
          return (
            <div className={style.user__inf} key={index}>
                <a href={user.html_url} target="_blank"><img src={user.avatar_url} alt="follower" /></a>
                <div className={style.user__inf__name}><span>{user.login}</span></div>
            </div>
          )
        }

        else if(data[i].name === 'orgs' && this.props.userInfo.orgs.length !== 0) {
          let url = user.url.split('api.');
          url = url[0] + url[1];

          return (
            <div className={style.user__inf} key={index}>
                <a href={url} target="_blank"><img src={user.avatar_url} alt="organization" /></a>
                <div className={style.user__inf__name}><span>{user.login}</span></div>
            </div>
          )
        }

        else if(data[i].name === 'repos' && this.props.userInfo.repos.length !== 0) {
          return (
            <div className={style.user__repo} key={user.id}>
              <div className={style.uesr__repo__info}>
                <img src="dist/img/repository.png" className={style.user__repo__img}/>
                  <div className={style.user__repo__desc}>
                    <div className={style.user__repo__description}>
                      <span className={style.user__repo__description__title}>Name:</span>
                      <span>{user.name}</span>
                    </div>
                    <div className={style.user__repo__description}>
                      <span className={style.user__repo__description__title}>Language:</span>
                      <span>{user.language ? user.language : 'unknown'}</span>
                    </div>
                    <div className={style.user__repo__description}>
                      <span className={style.user__repo__description__title}>Pushed at:</span>
                      <span>{user.pushed_at}</span>
                    </div>
                    <div className={style.user__repo__description}>
                      <span className={style.user__repo__description__title}>Created at:</span>
                      <span>{user.created_at}</span>
                    </div>
                    <div className={style.user__repo__description}>
                      <span className={style.user__repo__description__title}>Size:</span>
                      <span>{user.size} Kb</span>
                    </div>
                  </div>
              </div>
              <a className={style.user__repo__download} href={user.clone_url} target="_blank">Download</a>
            </div>
          )
        }

        else if (data[i].name === 'subscr' && this.props.userInfo.followers.length !== 0) {
          return (
            <div className={style.user__repo} key={user.id}>
              <div className={style.uesr__repo__info}>
                <img src="dist/img/repository.png" className={style.user__repo__img}/>
                  <div className={style.user__repo__desc}>
                    <div className={style.user__repo__description}>
                      <span className={style.user__repo__description__title}>Name:</span>
                      <span>{user.name}</span>
                    </div>
                    <div className={style.user__repo__description}>
                      <span className={style.user__repo__description__title}>Language:</span>
                      <span>{user.language ? user.language : 'unknown'}</span>
                    </div>
                    <div className={style.user__repo__description}>
                      <span className={style.user__repo__description__title}>Pushed at:</span>
                      <span>{user.pushed_at}</span>
                    </div>
                    <div className={style.user__repo__description}>
                      <span className={style.user__repo__description__title}>Created at:</span>
                      <span>{user.created_at}</span>
                    </div>
                    <div className={style.user__repo__description}>
                      <span className={style.user__repo__description__title}>Size:</span>
                      <span>{user.size} Kb</span>
                    </div>
                  </div>
              </div>
              <a className={style.user__repo__download} href={user.clone_url} target="_blank">Download</a>
            </div>
          )
        }

        else {
          return 'Information not found :('
        }
      });
    }

    return (
      <div className={style.user__information}>
        <div className={style.user__head}>
          <h1>{this.props.user.login}</h1>
          
          <div className={style.module_border_wrap}>
            <img className={style.user_photo} src={this.props.user.avatar_url} alr="user photo" />
          </div>
        </div>

        <div className={style.user__shortInfo}>
          <div className={style.user__shortInfo_element}>
            <img className={style.user__shortInfo_icon} src="dist/img/followers.png" alt="folowers" />
            <span>Followers: <b>{this.props.userInfo.followers.length}</b></span>
          </div>
          <div className={style.user__shortInfo_element}>
            <img className={style.user__shortInfo_icon} src="dist/img/organization.png" alt="organization" />
            <span>Organizations: <b>{this.props.userInfo.orgs.length}</b></span> 
          </div>
          <div className={style.user__shortInfo_element}>
            <img className={style.user__shortInfo_icon} src="dist/img/repos.png" alt="repositories" />
            <span>Repositories: <b>{this.props.userInfo.repos.length}</b></span> 
          </div>
          <div className={style.user__shortInfo_element}>
            <img className={style.user__shortInfo_icon} src="dist/img/subscriptions.png" alt="rubscriptions" />
            <span>Subscriptions: <b>{this.props.userInfo.subscr.length}</b></span>
          </div>
        </div>

        <Accordion data={data}> </Accordion> 
      </div>
    )
  }
}
