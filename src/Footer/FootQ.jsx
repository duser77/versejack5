import './FootQ.css'
export default function Footer() {
    return (
        <div className="footQCont">
            <div className="textC">
               <div className="text1">Have any Queries or wanna Book a Meet With us </div>
            </div>
            {/* <div className="btn">
                  
            </div> */}
            <div  className="FootQbtnDiv" >
          <div className="btnImgCont" >
          <img className="btnImg" src="/btn.png" alt="btn-img" />
          </div> 
          <div className="btnText"> Book a Meet</div>
          </div>
             
            <div className="box f"></div>
            <div className='box sec'></div>
            <div className='third'></div>
            <div className='fourth'></div>
        </div>
    );
}