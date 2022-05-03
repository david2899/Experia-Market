import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import img1 from "../assets/images/icon/connect-1.png";
import img2 from "../assets/images/icon/connect-2.png";
import img3 from "../assets/images/icon/connect-3.png";
import img4 from "../assets/images/icon/connect-4.png";
import img5 from "../assets/images/icon/connect-5.png";
import img6 from "../assets/images/icon/connect-6.png";
import img7 from "../assets/images/icon/connect-7.png";
import img8 from "../assets/images/icon/connect-8.png";

import imgWallet from "./../assets/images/box-item/0images.jpg";

const WalletConnect = () => {
  // const [data] = useState(
  //     [
  //         {
  //             img: img1,
  //             title: 'Meta Mask',
  //             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  //         },
  //         {
  //             img: img2,
  //             title: 'Bitski',
  //             description: ' Dolor lacinia? Donec nulla, deleniti, dis arcu pharetra maecenas dapibus ante nemo! Wisi?'
  //         },
  //         {
  //             img: img3,
  //             title: 'Fortmatic',
  //             description: 'Potenti eleifend faucibus quo vero nibh netus suspendisse unde? Consectetuer aspernatur'
  //         },
  //         {
  //             img: img4,
  //             title: 'Wallet Connect',
  //             description: 'Metus corrupti itaque reiciendis, provident condimentum, reprehenderit numquam, mi'
  //         },
  //         {
  //             img: img5,
  //             title: 'Coinbase Wallet',
  //             description: 'Sollicitudin iure conubia vivamus habitasse aptent, eligendi deserunt excepteur tellus non'
  //         },
  //         {
  //             img: img6,
  //             title: 'Authereum',
  //             description: 'Purus irure lacinia eiusmod inventore bibendum habitant potenti non sint rem! Felis, asper'
  //         },
  //         {
  //             img: img7,
  //             title: 'Kaikas',
  //             description: 'Varius culpa, aspernatur accusantium? Corporis rhoncus, voluptatibus incididunt, velit '
  //         },
  //         {
  //             img: img8,
  //             title: 'Torus',
  //             description: ' Soluta fuga nihil, mollitia, ad reprehenderit qui viverra culpa posuere labore inventore'
  //         },

  //     ]
  // )
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    logged: false
  });

  const [userData, setUserData] = useState({
    fullName: "hershiser ponce",
    email: "hershiserponce@gmail.com",
    password: "hershiser123",
    Address: "lkadkldajdjdaj4556654"
  });

  const login = (e) =>{
    e.preventDefault();
    if(form.fullName === userData.fullName & form.email === userData.email & form.password === userData.password){
       
        setForm({
            ...form,
            logged:true
        }
        )
        console.log("form.logged",form.logged);
    }
console.log("form.logged",form.logged);
  }
  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Connect Wallet</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                  </li>
                  <li>Connect Wallet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-connect-wallet tf-section">
        <div className="themesflat-container">
          {/* <div className="row">
                        <div className="col-12">
                            <h2 className="tf-title-heading ct style-2 mg-bt-12">
                                Connect Your Wallet
                            </h2>
                            <h5 className="sub-title ct style-1 pad-400">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="sc-box-icon-inner style-2">
                                {
                                    data.map((item,index) => (
                                        <div key={index} className="sc-box-icon">
                                            <div className="img">
                                                <img src={item.img} alt="Axies" />
                                            </div>
                                            <h4 className="heading"><Link to="/login">{item.title}</Link> </h4>
                                            <p className="content">{item.description}</p>
                                         </div>
                                    ))
                                }
                            </div>  
                        </div>    
                    </div>               */}
          <div className="row">
            <div className="col-6">
                {
                    form.logged === false ?
              <img className="stylesImg" src={imgWallet}></img>
              : <>
              <h2>Wallet</h2>

              <span>Address:{userData.Address}</span>


              <div className="sc-btn-top mg-r-12" id="site-header">
              <Link to="#" className="sc-button header-slider style style-1 wallet fl-button pri-1"><span>connect
              </span></Link>
          </div>

          </>
              }
            </div>
            <div className="col-6">
              <div className="flat-form box-login-email">
                <div className="box-title-login">
                  <h5>Login with email</h5>
                </div>

                <div className="form-inner">
                  <form onSubmit={login}  id="contactform">
                    <input
                      id="name"
                      name="name"
                    //   tabIndex="1"
                    //   aria-required="true"
                      required
                      type="text"
                      placeholder="Your Full Name"

                      onChange={({ target }) =>
                      setForm({
                        ...form,
                        fullName: target.value,
                      })
                    }
                    />
                    <input
                      id="email"
                      name="email"
                    //   tabIndex="2"
                    //   aria-required="true"
                      type="email"
                      placeholder="Your Email Address"
                      required

                      onChange={({ target }) =>
                      setForm({
                        ...form,
                        email: target.value,
                      })
                    }
                    />
                    <input
                      id="pass"
                      name="pass"
                    //   tabIndex="3"
                    //   aria-required="true"
                      type="text"
                      placeholder="Set Your Password"
                      required

                      onChange={({ target }) =>
                      setForm({
                        ...form,
                        password: target.value,
                      })
                    }
                    />
                    <div className="row-form style-1">
                      <label>
                        Remember me
                        <input type="checkbox" />
                        <span className="btn-checkbox"></span>
                      </label>
                      <Link to="#" className="forgot-pass">
                        Forgot Password ?
                      </Link>
                    </div>

                    <button  type="submit">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WalletConnect;
