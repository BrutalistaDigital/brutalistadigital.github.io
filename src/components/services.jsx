export const Services = (props) => {
  return (
    <div id='services' className="text-center">
    <div className='container'>
      <div className='col-md-10 col-md-offset-1 section-title'>
        <h2>Nuestros Servicios</h2>
      </div>
        <div className='row' >
          <div className='col-xs-6 col-md-4'>
          
            <i className={props.data ? props.data.icon : 'loading...'}></i>
            <h3> {props.data ? props.data.name : 'loading'}</h3>
            <div className='service-desc'>
              <ul id="service-list">
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : 'loading'}
                </ul>
              
              
            </div>
            
          </div>
          <div className='col-xs-6 col-md-4'>
          
            <i className={props.data ? props.data.icona : 'loading...'}></i>
            <h3> {props.data ? props.data.namea : 'loading'}</h3>
            <div className='service-desc'>
              <ul id="service-list">
                  {props.data
                    ? props.data.Whya.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : 'loading'}
                </ul>
              
              
            </div>
            
          </div>
          <div className='col-xs-6 col-md-4'>
          
          <i className={props.data ? props.data.iconb : 'loading...'}></i>
          <h3> {props.data ? props.data.nameb : 'loading'}</h3>
          <div className='service-desc'>
            <ul id="service-list">
                {props.data
                  ? props.data.Whyb.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))
                  : 'loading'}
              </ul>
            
            
          </div>
          
        </div>
        <div className='col-xs-6 col-md-6'>
          
            <i className={props.data ? props.data.iconc : 'loading...'}></i>
            <h3> {props.data ? props.data.namec : 'loading'}</h3>
            <div className='service-desc'>
              <ul id="service-list">
                  {props.data
                    ? props.data.Whyc.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : 'loading'}
                </ul>
              
              
            </div>
            
          </div>
          <div className='col-xs-6 col-md-6' >
          
          <i className={props.data ? props.data.icond : 'loading...'}></i>
          <h3> {props.data ? props.data.named : 'loading'}</h3>
          <div className='service-desc'>
            <ul id="service-list">
                {props.data
                  ? props.data.Whyd.map((d, i) => (
                      <li key={`${d}-${i}`}>{d}</li>
                    ))
                  : 'loading'}
              </ul>
            
            
          </div>
          
        </div>
      
                </div>
        
        </div>
        
      
    </div>

  )
}
