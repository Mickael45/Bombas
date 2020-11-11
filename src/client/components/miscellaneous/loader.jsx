const React = require('react')

const Loader = React.createClass({
  render () {
    return (
      <div className='valign-wrapper row login-box'>
        <div className='col s10 pull-s1 m6 pull-m3 l4 pull-l4'>
          <div className='preloader-wrapper small active'>
            <div className='spinner-layer spinner-red-only'>
              <div className='circle-clipper left'>
                <div className='circle' />
              </div>
              <div className='gap-patch'>
                <div className='circle' />
              </div>
              <div className='circle-clipper right'>
                <div className='circle' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Loader
