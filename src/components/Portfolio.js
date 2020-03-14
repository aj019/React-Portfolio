import React, {Component} from 'react'
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id='portfolio'>
        <div className='row'>
          <div className='twelve columns collapsed'>
            <h1>Check Out Some of My Works.</h1>
            <div
              id='portfolio-wrapper'
              className='bgrid-quarters s-bgrid-thirds cf'
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map(item => {
                  return (
                    <div
                      onClick={() => {
                        if (item.link) {
                          window.location.href = item.link
                        }
                      }}
                      className='columns portfolio-item'
                    >
                      <div className='item-wrap'>
                        <a href={item.link ? item.link : '#'}>
                          <div
                            style={{
                              height: '200px',
                              background: `url(${item.imgurl}) no-repeat 50% 50%`,
                              backgroundSize: 'cover'
                            }}
                            className='item-img'
                          ></div>
                          <div className='overlay'>
                            <div className='portfolio-item-meta'>
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
