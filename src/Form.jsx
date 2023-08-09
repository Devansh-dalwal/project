let Form=()=>{
let data=[
	{
		"abbreviation": "Jan",
		"name": "January"
	},
	{
		"abbreviation": "Feb",
		"name": "February"
	},
	{
		"abbreviation": "Mar",
		"name": "March"
	},
	{
		"abbreviation": "Apr",
		"name": "April"
	},
	{
		"abbreviation": "May",
		"name": "May"
	},
	{
		"abbreviation": "Jun",
		"name": "June"
	},
	{
		"abbreviation": "Jul",
		"name": "July"
	},
	{
		"abbreviation": "Aug",
		"name": "August"
	},
	{
		"abbreviation": "Sep",
		"name": "September"
	},
	{
		"abbreviation": "Oct",
		"name": "October"
	},
	{
		"abbreviation": "Nov",
		"name": "November"
	},
	{
		"abbreviation": "Dec",
		"name": "December"
	}
]    
    return(<section>
        <div className="main">
        <div className="logo">
            <div className="img"></div>
            <span>Sign up for free to start listening.</span>
        </div>

    <a className="a1" href="https://www.facebook.com/facebook/">Sign up in with Facebook
        <div className="lable1"></div>
    </a>
    <a className="a2" href="https://www.google.com/gmail/about/">Sign up in with Google
        <div className="lable2"></div>
    </a>

    <div className="or">
        {/* <span>___________</span> */}
       <span> or </span>
        {/* <span>___________</span> */}
    </div>

    <div className="details">
    Sign up with your email address
    </div>
     <div className="main2">

    <div className="email">
        <label htmlFor="Email">What's your email?</label>
        <input type="text" id="Email" placeholder="Enter your email." required />
    </div>
    <div className="pass">
        <label htmlFor="Pass">Create a password</label>
        <input type="password" id="Pass" placeholder="Create a password." required/>
    </div>
    <div className="profile">
        <label htmlFor="Pro">What should we call you?</label>
        <input type="text" id="Pro" placeholder="Enter a profile name." required/>
        <div className="extra">This appears on your profile.</div>


        <div className="DOB">
            <span className="extra2">What's your date of birth?</span>
            <div className="dob">
                <div className="month">
                    <label htmlFor="mon">Month</label>
                <input type="text" id="mon" placeholder="Month" list="dlist" required/>
                <datalist id="dlist">
                {
                   data.map(({name})=>{
                    return <option value={name} key={Math.random()}></option>})
                }
                </datalist>
                </div>

                <div className="Day">
                    <label htmlFor="day">Day</label>
                    <input type="text"  id="day" placeholder="DD" required/>
                </div>
                <div className="Year">
                    <label htmlFor="year">Year</label>
                    <input type="text" id="year" placeholder="YYYY" required/>
                </div>

                </div>
                <div className="Gender">
                    <span className="extra3">What's your gender?</span>
                    <div className="gender">
                        <input type="radio" name="Gen" id="gender"  required/>
                        <label htmlFor="Gen">Male</label>
                        <input type="radio" name="Gen" id="gender" />
                        <label htmlFor="Gen">Female</label>
                        <input type="radio" name="Gen" id="gender" />
                        <label htmlFor="Gen">Other</label>
                    </div>
                </div>
                

                <div className="notification">
                    <input type="checkbox"  id="ok" />
                    <div className="check"><label htmlFor="ok">Share my registration data with Spotify's content providers for marketing purposes.</label></div>

                </div>
                 
                 <div className="button">
                    <input type="Submit" value="Sign Up" />
                 </div>

            </div>
        </div>
    </div>

     <div className="extra4">
        <span>Have an account?</span>
        <a className="a5" href="https://accounts.spotify.com/en/login?creation_point=https%3A%2F%2Fwww.spotify.com%2Fus%2Fsignup&continue=https%3A%2F%2Fwww.spotify.com%2Faccount%2Foverview%2F%3Fflow_id%3D739c7a58-c8bf-4537-a553-196acbc6468d%253A1688381907&flow_id=739c7a58-c8bf-4537-a553-196acbc6468d%3A1688381907&_gl=1*1rji5iw*_gcl_au*MTc3NTMyNjYwOC4xNjg3MTgwMzMw">Log in</a>
     </div>
    </div>
    </section>)
}
export default Form;