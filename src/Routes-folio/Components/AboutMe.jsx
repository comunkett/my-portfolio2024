import legacad from '../../assets/academloref.png';
import avanx from '../../assets/avanxaref.png';
import anaiep from '../../assets/aiepref.png';
import edx from '../../assets/edxref.png';
import achap from '../../assets/achref.png';
import blrock from '../../assets/blaref.png';
import micro from '../../assets/micref.png';
import fond2 from '../../assets/newfondo2.jpeg';
import plane from '../../assets/iconofy/airplane.png';
import student from '../../assets/iconofy/student.png';
import head from '../../assets/iconofy/headp.png';
import obj from '../../assets/iconofy/archer.png';
import meta from '../../assets/iconofy/persongi.png';
import voice from '../../assets/iconofy/sounded.png';
import bike from '../../assets/iconofy/cycling.png';
import cook from '../../assets/iconofy/cook.png';
import goals from '../../assets/iconofy/goals.png';
import iam from '../../assets/iconofy/coding.png';
import Reviewers from "./Reviewers";
import refer from "../../../refer.json";
import { MdDesignServices } from "react-icons/md";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";

const AboutMe = () => /* console.log(refer);*/ /* const ref = refer*/ (
  <>
    <section className="container-sm" style={{ marginTop: "100px", marginBottom: "-40px" }}>
      <div id="about" className="text-init mt-4">
        <h6 className="px-2 m-0">
          Story time
        </h6>
        <span className="point"></span>
      </div>
      <h1
        className="text-intro"
        style={{ fontSize: "40px", marginTop: "-8px" }}
      >
        Im passionate about create beautiful ideas, wonderfull business that
        empower people.
      </h1>
      <div className="w-100 text-end px-5">
        <p style={{ fontStyle: "italic", color: "whitesmoke", fontSize: "13px" }}>&quot;because my main mission is to serve those who have trusted me, <br /> leave me a message of recognition, <strong style={{ color: "azure" }}>I aprecciate it a lot&quot;</strong></p>
      </div>
      <div className="row m-auto py-5">
        <div className="card-box-ref d-flex gap-4 justify-content-center py-4">
          {refer.map((array) => {
            return (
              <li className="card-ref border border-1 border-secondary py-2 mx-2" key={array.id}>
                <Reviewers refs={array} />
              </li>
            );
          })}
        </div>
        <section className="mt-5 pb-5">
          <div className="bg-dark" style={{
            border: "1px solid black",
            maxWidth: "fit-content",
            width: "auto",
            padding: "60px",
            borderRadius: "40px"
          }}>
            <div className="text-center">
              <h3 className="text-outter" style={{ fontSize: "20px" }}>
                Connecting real-world interests with purpose, emotions and desire to progress
              </h3>
              <h3 className="h2" style={{ color: "lightblue" }}>
                My vision is to form the best and largest community of entrepreneurs, developers and future digital talents
              </h3>
              <h4 className="text-intro" style={{ fontSize: "25px", marginTop: "0px" }}>
                from my present, someday...
              </h4>
            </div>
            <div className="d-flex w-100 justify-content-center gap-3 py-3">
              <button className="col-2 btn btn-outline-danger">
                <MdDesignServices /> <hr /> main projects
              </button>
              <button className="col-3 btn btn-outline-discord">
                <BsDiscord /> <hr />Discord support
              </button>
              <button className="col-2 btn btn-outline-info">
                <BsFillFileEarmarkPostFill /> <hr />my posts
                {/* dirigir hacia posts de mi plataforma freelance preferida con */}
                {/* con las publicaciones destacadas de mis servicios */}
              </button>
            </div>
            <div className="text-center pt-2 w-100">
              <p className="w-75 m-auto" style={{ fontSize: "13px" }}>
                Contact me whenever you want, let&apos;s chat and talk about business, you can also schedule an appointment with me to get to know each other better and understand your requirements 😉✍
              </p>
            </div>
          </div>
        </section>
        <div className="row pt-4 m-0">
          <div id="about" className="text-init mt-4">
            <h6 className="px-2 m-0">
              About me, just a little more...
            </h6>
            <span className="point"></span>
          </div>
        </div>

        <div className="col-6">
          {/* <div id="about" className="text-init mt-4">
      <h6 className="px-2 m-0">
        About me, just a little more...
      </h6>
      <span className="point"></span>
      </div> */}
          {/* <div className=""> */}
          <div className="p-about">
            <h3 style={{ color: "lightblue " }}>My first flight</h3>
            <p className="p-about">
              In January 2015, I obtained my first degree as an industrial
              mechanical technician in design and maintenance. However, I
              wasn&apos;t satisfied with the program&apos;s content or the
              limitations it placed on my potential for growth. Therefore, I
              continued my studies/education for a couple more years...
            </p>
            <div className="d-flex justify-content-end px-3">
              <img src={plane} style={{ width: "60px" }} alt="" />
            </div>
          </div>
          {/* </div> */}
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1
              className="text-intro text-center"
              style={{ fontSize: "35px", marginBottom:"40px" }}
            >
              Trusted and supported by:
            </h1>
            <div className="row my-3">

              {/* <div className="col">
          <img src={legacad} style={{width:"150px", padding:"5px"}} alt="academlo_legacy" />
        </div> */}
              <div className="col">
                <img src={anaiep} style={{ width: "150px", padding: "5px", background: "black", border: "1px solid lightblue" }} alt="academlo_legacy" />

              </div>
              <div className="col">
                <img src={avanx} style={{ width: "150px", padding: "5px", background: "black", border: "1px solid lightblue" }} alt="academlo_legacy" />
              </div>

            </div>
            <div className="row">

              <div className="col">
                <img src={edx} style={{ width: "140px", padding: "5px", background: "black", border: "1px solid lightblue" }} alt="academlo_legacy" />
              </div>
              <div className="col">
                <img src={legacad} style={{ width: "170px", padding: "5px", background: "black",  border: "1px solid lightblue" }} alt="academlo_legacy" />
              </div>
              <div className="col">
                <img src={micro} style={{ width: "150px", padding: "5px", background: "black",  border: "1px solid lightblue"}} alt="academlo_legacy" />
              </div>

            </div>
            <div className="row my-4">

              <div className="col">
                <img src={achap} style={{ width: "150px", padding: "5px", background: "black", border: "1px solid lightblue" }} alt="academlo_legacy" />
              </div>
              <div className="col">
                <img src={blrock} style={{ width: "150px", padding: "5px", background: "black", border: "1px solid lightblue" }} alt="academlo_legacy" />
              </div>

            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="">
            <div className="p-about">
              <h3 style={{color: "lightblue"}}>Niche of action</h3>
              <p className="p-about">
                Over the years I developed my skills, helped businesses grow,
                made friends, traveled to Argentina on business and advised
                others in account creation sessions in decentralized apps, all
                because I was attracted to the value of cryptocurrencies and
                what they there was behind these...
              </p>
              <div className="d-flex justify-content-end gap-3 px-3">
                <img src={student} style={{ width: "60px", backgroundColor:"whitesmoke", padding:"2px", borderRadius:"999px" }} />
                <img src={head} style={{ width: "60px" }} alt="" />
                {/* <img src={student} style={{ width: "50px" }} alt="" /> */}
              </div>
            </div>
          </div>
          <div>
            <div className="p-about">
              <h3 style={{color: "lightblue"}}>Remember the name</h3>
              <p className="p-about">
                Over the years I developed my skills, helped businesses grow,
                made friends, traveled to Argentina on business and advised
                others in account creation sessions in decentralized apps, all
                because I was attracted to the value of cryptocurrencies and
                what they there was behind these...
              </p>
              <div className="d-flex justify-content-end gap-3 px-3">
                <img src={obj} style={{ width: "50px" }} alt="" />
                <img src={meta} style={{ width: "50px" }} alt="" />
                <img src={voice} style={{ width: "50px", borderRadius:"50%", backgroundColor:"whitesmoke", padding:"3px" }} alt="" />
              </div>
            </div>
          </div>
        </div>
        <section className='container pt-4'>
        <div className="row px-0 my-0" style={{backgroundColor:"#1f192e", borderRadius:"20px"}}>
        <div className='d-flex flex-row px-0'>
            <div className="p-about">
              <h3 className='text-info'>My hardest years</h3>
              <p className="p-about">
                It is in this transition of solving my puzzles, having listened to my inner voice, that I discovered what I like to do, my vocation: programming,
                 I have been able to discover a world of possibilities and expand all this knowledge to my fields of interest: 
                 finances, shops, medicine, gastronomy, intelligence artificial and of course cryptocurrencies.
                 {/* Thanks to this, today I am much better, this is what it is all about, being better than my past self. We continue! */}
              </p>
              <div className="d-flex justify-content-end gap-4 px-3">
                <img src={bike} style={{ width: "50px" }} alt="" />
                <img src={cook} style={{ width: "50px" }} alt="" />
                <img src={goals} style={{ width: "50px" }} alt="" />
                <img src={iam} style={{ width: "50px" }} alt="" />
              </div>
            </div>
            <div className='d-flex'>
            <img src={fond2} style={{width:"300px", borderRadius:"20px", mask:"linear-gradient( 90deg, transparent, white 20%, white 80%, black)"}} alt="" />
            </div>
          </div>
        </div>
        </section>
      </div>
    </section>
  </>
);

export default AboutMe;
