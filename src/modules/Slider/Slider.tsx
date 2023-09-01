import React, {useCallback, useRef} from "react";
import {Swiper, SwiperClass, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import {Col, Row} from "antd";
import {A11y, Keyboard, Navigation, Pagination, Scrollbar} from "swiper/modules";
import pic from '../../assets/img/pic.png'
import nextSlider from '../../assets/img/nextslider.svg'

const Slider = () => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <>
            <Row justify={'space-between'} align={"middle"} style={{marginBottom: 30}}>
                <Col style={{fontSize: "50px"}}>
                    Новости
                </Col>
               <div className={"lineSlider"}></div>
                <Col>
                    <Row gutter={[20, 20]}>
                        <Col>

                            {/*<button ref={navigationPrevRef}>*/}
                            {/*    <div style={{cursor: "pointer"}}>*/}
                            {/*        <img src={nextSlider} alt=""/>*/}
                            {/*    </div>*/}
                            {/*</button>*/}
                        </Col>
                        <Col>
                            <button ref={navigationNextRef} className={"nextButton"}>
                                <div style={{cursor: "pointer"}}>
                                    <img src={nextSlider} alt=""/>
                                </div>
                            </button>
                            {/*<button ref={navigationNextRef}>Некст</button>*/}
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Swiper
                // @ts-ignore
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
                modules={[A11y, Scrollbar, Navigation, Pagination]}
                // className="mySwiper"
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
            >
                <SwiperSlide style={{
                    padding: "20px",
                    background: "#edf2ea",
                    borderRadius: "15px"
                }}>
                    <Row justify={"start"} gutter={[15, 15]}>
                        <Col>
                            <div className={"pic"}>
                                <img src={pic} alt=""/>
                            </div>
                        </Col>
                        <Col style={{color: "#2A2A2A"}}>
                            12.24.2020
                        </Col>
                        <Col style={{fontSize: "28px", fontWeight: "bold", textAlign: "start"}}>
                            Состоялось открытие Офис в Ордабасинском районе Туркестанской области
                        </Col>
                        <Col style={{textAlign: "start"}}>
                            Сервисный акимат оперативно и эффективно рассматривает все обращения граждан, легко и быстро
                            решает государственные услуги в одном здании. Цель сервисного акимата — борьба с
                            коррупцией...
                        </Col>
                        <Col>
                            УЗНАТЬ БОЛЬШЕ
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide style={{
                    padding: "20px",
                    background: "#edf2ea",
                    borderRadius: "15px"
                }}>
                    <Row justify={"start"} gutter={[15, 15]}>
                        <Col>
                            <div className={"pic"}>
                                <img src={pic} alt=""/>
                            </div>
                        </Col>
                        <Col style={{color: "#2A2A2A"}}>
                            12.24.2020
                        </Col>
                        <Col style={{fontSize: "28px", fontWeight: "bold", textAlign: "start"}}>
                            Состоялось открытие Офис в Ордабасинском районе Туркестанской области
                        </Col>
                        <Col style={{textAlign: "start"}}>
                            Сервисный акимат оперативно и эффективно рассматривает все обращения граждан, легко и быстро
                            решает государственные услуги в одном здании. Цель сервисного акимата — борьба с
                            коррупцией...
                        </Col>
                        <Col>
                            УЗНАТЬ БОЛЬШЕ
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide style={{
                    padding: "20px",
                    background: "#edf2ea",
                    borderRadius: "15px"
                }}>
                    <Row justify={"start"} gutter={[15, 15]}>
                        <Col>
                            <div className={"pic"}>
                                <img src={pic} alt=""/>
                            </div>
                        </Col>
                        <Col style={{color: "#2A2A2A"}}>
                            12.24.2020
                        </Col>
                        <Col style={{fontSize: "28px", fontWeight: "bold", textAlign: "start"}}>
                            Состоялось открытие Офис в Ордабасинском районе Туркестанской области
                        </Col>
                        <Col style={{textAlign: "start"}}>
                            Сервисный акимат оперативно и эффективно рассматривает все обращения граждан, легко и быстро
                            решает государственные услуги в одном здании. Цель сервисного акимата — борьба с
                            коррупцией...
                        </Col>
                        <Col>
                            УЗНАТЬ БОЛЬШЕ
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide style={{
                    padding: "20px",
                    background: "#edf2ea",
                    borderRadius: "15px"
                }}>
                    <Row justify={"start"} gutter={[15, 15]}>
                        <Col>
                            <div className={"pic"}>
                                <img src={pic} alt=""/>
                            </div>
                        </Col>
                        <Col style={{color: "#2A2A2A"}}>
                            12.24.2020
                        </Col>
                        <Col style={{fontSize: "28px", fontWeight: "bold", textAlign: "start"}}>
                            Состоялось открытие Офис в Ордабасинском районе Туркестанской области
                        </Col>
                        <Col style={{textAlign: "start"}}>
                            Сервисный акимат оперативно и эффективно рассматривает все обращения граждан, легко и быстро
                            решает государственные услуги в одном здании. Цель сервисного акимата — борьба с
                            коррупцией...
                        </Col>
                        <Col>
                            УЗНАТЬ БОЛЬШЕ
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide style={{
                    padding: "20px",
                    background: "#edf2ea",
                    borderRadius: "15px"
                }}>
                    <Row justify={"start"} gutter={[15, 15]}>
                        <Col>
                            <div className={"pic"}>
                                <img src={pic} alt=""/>
                            </div>
                        </Col>
                        <Col style={{color: "#2A2A2A"}}>
                            12.24.2020
                        </Col>
                        <Col style={{fontSize: "28px", fontWeight: "bold", textAlign: "start"}}>
                            Состоялось открытие Офис в Ордабасинском районе Туркестанской области
                        </Col>
                        <Col style={{textAlign: "start"}}>
                            Сервисный акимат оперативно и эффективно рассматривает все обращения граждан, легко и быстро
                            решает государственные услуги в одном здании. Цель сервисного акимата — борьба с
                            коррупцией...
                        </Col>
                        <Col>
                            УЗНАТЬ БОЛЬШЕ
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide style={{
                    padding: "20px",
                    background: "#edf2ea",
                    borderRadius: "15px"
                }}>
                    <Row justify={"start"} gutter={[15, 15]}>
                        <Col>
                            <div className={"pic"}>
                                <img src={pic} alt=""/>
                            </div>
                        </Col>
                        <Col style={{color: "#2A2A2A"}}>
                            12.24.2020
                        </Col>
                        <Col style={{fontSize: "28px", fontWeight: "bold", textAlign: "start"}}>
                            Состоялось открытие Офис в Ордабасинском районе Туркестанской области
                        </Col>
                        <Col style={{textAlign: "start"}}>
                            Сервисный акимат оперативно и эффективно рассматривает все обращения граждан, легко и быстро
                            решает государственные услуги в одном здании. Цель сервисного акимата — борьба с
                            коррупцией...
                        </Col>
                        <Col>
                            УЗНАТЬ БОЛЬШЕ
                        </Col>
                    </Row>
                </SwiperSlide>
                <SwiperSlide style={{
                    padding: "20px",
                    background: "#edf2ea",
                    borderRadius: "15px"
                }}>
                    <Row justify={"start"} gutter={[15, 15]}>
                        <Col>
                            <div className={"pic"}>
                                <img src={pic} alt=""/>
                            </div>
                        </Col>
                        <Col style={{color: "#2A2A2A"}}>
                            12.24.2020
                        </Col>
                        <Col style={{fontSize: "28px", fontWeight: "bold", textAlign: "start"}}>
                            Состоялось открытие Офис в Ордабасинском районе Туркестанской области
                        </Col>
                        <Col style={{textAlign: "start"}}>
                            Сервисный акимат оперативно и эффективно рассматривает все обращения граждан, легко и быстро
                            решает государственные услуги в одном здании. Цель сервисного акимата — борьба с
                            коррупцией...
                        </Col>
                        <Col>
                            УЗНАТЬ БОЛЬШЕ
                        </Col>
                    </Row>
                </SwiperSlide>

            </Swiper>
        </>

    )
}

export default Slider;