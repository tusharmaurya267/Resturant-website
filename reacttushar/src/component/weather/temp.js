import React from 'react'

const temp = () => {
  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input
                type="search"
                placeholder="search"
                autofocus
                id="search"
                className="searchTerm">

            </input>
            <button className='searchbutton' type='button'>
                Search
            </button>
        </div>
    </div>

    <article className='widget'>
        <div className='weatherIcon'>
            <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
                <span>25.5$deg</span>
            </div>
            <div className='desciption'>
                <div className='weatherCondition'>sunny</div>
                <div className='place'>Pune, India</div>
            </div>
        </div>

        <div className='date'>{new Date().toLocaleDateString()}</div>
        <div className='extra-temp'>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p>
                    <i className={"wi-wi-sunset"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                        19:19 PM <br></br>
                        Sunset
                    </p>
                </div>

                <div className='two-sided-section'>
                    <p>
                    <i className={"wi-wi-humidity"}></i>
                    </p>
                    <p className='extra-info-leftside'>
                        19:19 PM <br></br>
                        Humidity
                    </p>
                </div>
            </div>
        </div>
    </article>
    </>

  )
}

export default temp