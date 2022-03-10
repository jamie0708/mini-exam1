import './Main.scss';
import main from '../../Assets/Images/main.png'
import bigTxt from '../../Assets/Images/bigTxt.png'
import pic_1 from '../../Assets/Images/pic_1.png'
import pic_2 from '../../Assets/Images/pic_2.png'
import pic_3 from '../../Assets/Images/pic_3.png'
import video from '../../Assets/Images/video.png'
import video2 from '../../Assets/Images/video2.png'
import video3 from '../../Assets/Images/video3.png'
import png1 from '../../Assets/Images/1.png'
import png2 from '../../Assets/Images/2.png'
import png3 from '../../Assets/Images/3.png'
import png4 from '../../Assets/Images/4.png'
import png5 from '../../Assets/Images/5.png'

function Main() {
return (
<>
	<main className="main">
		<div className="container">
			<div className="row">
				<div className="col-12 col-lg-4">
					<div className="main_professor">
						<div className="main_professor-imgbox">
							<img src={main} alt="main-img"
								className="main_professor-imgbox-img" />
						</div>
						<div className="main_professor-txtbox">
							<h4 className="main_professor-txtbox-name">Janpolat Kudaybergenov</h4>
							<p className="main_professor-txtbox-job">Professor</p>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-8">
					<div className="main_speech">
						<h4 className="main_speech-title">
							Welcome speech of rector<br />Prof.Janpolat Kudaybergenov
						</h4>
						<div className="main_speech-underline"></div>
						<p className="main_speech-txt">
							Dear friends, guests and students,
							<br /><br />
							First of all, let me welcome all of you on behalf of Yeoju Technical Institute in Tashkent.
							I would like
							to take this opportunity to say that, at present under the leadership of the President of
							the Republic of
							Uzbekistan Shavkat Mirziyoyev, fundamental reforms in the sphere of higher education are
							under way.
							<br /><br />
							Significant example of this is the Presidential degree of the Republic of Uzbekistan on
							October 8, 2019
							No.UP-5847 “About the approval of the Concept of the higher education system development of
							the Republic
							of Uzbekistan till 2030”. Particularly, the Head of the country pays particular attention to
							the
							development of the public-private partnership in the sphere of higher education, increase in
							the level of
							the enrolment (coverage) of the higher education by more than 50% on the basis of
							organization in the
							country’s regions the activity of public and private higher educational establishments, and
							creation of a
							vibrant, competitive environment.
							<br /><br />
							Taking into consideration the aims set by the Head of the country and the public policy in
							the sphere of
							higher education in general, Yeoju Technical Institute in Tashkent implements curricula on
							the basis of
							credit-module system, developed in collaboration with Korean experts in step with the recent
							advancements
							in the sphere of education, science and technology of the Republic of Korea. The institute,
							along with
							in-depth teaching the theoretical knowledge, pays special attention to the development of
							practical
							skills, development of logical and creative thinking of students, and also broadening an
							academic and
							practical collaboration with the real sectors of economy. Besides that, the institute pays
							constant
							attention to the improvement of its infrastructure and physical facilities, as well as
							involvement of
							leading international teachers and practitioners in the educational process.
							<br /><br />
							<span className="main_speech-txt-span">Welcome to Yeoju technical Institute in Tashkent!</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<img className="main_bigTxt" src={bigTxt} alt="bigTxt-img" />
	</main>

	<section className="news_section">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="news_section_titlebox">
						<h1 className="news_section_titlebox-title">
							News & Events
						</h1>
						<div className="news_section_titlebox-underline"></div>
					</div>
				</div>
				<div className="col-12">
					<div className="news_section_cardbox">
						<div className="row">
							<div className="col-12 col-lg-4">
								<div className="news_section_cardbox-card">
									<img className="news_section_cardbox-card-img"
										src={pic_1} alt="pic_1-img" />
									<div className="news_section_cardbox-card-txtbox">
										<h6 className="news_section_cardbox-card-txtbox-date">
											<i className="bi bi-calendar-range"></i> 08 NOV
											<span className="news_section_cardbox-card-txtbox-date-span">2021</span>
										</h6>
										<h4 className="news_section_cardbox-card-txtbox-title">Workshop</h4>
										<p className="news_section_cardbox-card-txtbox-txt">
											Project "Seeds for the Future" during the week: a round table with
											representatives of UNDP in
											Uzbekistan, a seminar - the leadership goals, Chinese culture, a popular tea
											ceremony, questions
											and answers with a Chinese professor, the history of "Silicon Valley" in
											China and the
											presentation of Uzbek culture and traditions to foreign students.
											The program ended with such useful experience as a demonstration of national
											traditions.
											Currently, selected teams are occupied by the presentation of their social
											projects with the help
											of IT decisions.
										</p>
										<a href="#" className="news_section_cardbox-card-txtbox-link">Read more</a>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="news_section_cardbox-card">
									<img className="news_section_cardbox-card-img"
										src={pic_2} alt="pic_2-img" />
									<div className="news_section_cardbox-card-txtbox">
										<h6 className="news_section_cardbox-card-txtbox-date">
											<i className="bi bi-calendar-range"></i> 08 NOV
											<span className="news_section_cardbox-card-txtbox-date-span">2021</span>
										</h6>
										<h4 className="news_section_cardbox-card-txtbox-title">SEEDS FOR THE FUTURE</h4>
										<p className="news_section_cardbox-card-txtbox-txt">
											Our students will also participate in the Huawei global project, which has
											nearly 9,000 of the
											world's best students trained to date. "Seeds for the Future" is Huawei's
											global corporate social
											responsibility program. Launched in Thailand for the first time in 2008,
											this project aims to
											develop local ICT talents, broaden their horizons and
										</p>
										<a href="#" className="news_section_cardbox-card-txtbox-link">Read more</a>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="news_section_cardbox-card">
									<img className="news_section_cardbox-card-img"
										src={pic_3} alt="pic_3-img" />
									<div className="news_section_cardbox-card-txtbox">
										<h6 className="news_section_cardbox-card-txtbox-date">
											<i className="bi bi-calendar-range"></i> 08 NOV
											<span className="news_section_cardbox-card-txtbox-date-span">2021</span>
										</h6>
										<h4 className="news_section_cardbox-card-txtbox-title">Workshop</h4>
										<p className="news_section_cardbox-card-txtbox-txt">
											Project "Seeds for the Future" during the week: a round table with
											representatives of UNDP in
											Uzbekistan, a seminar - the leadership goals, Chinese culture, a popular tea
											ceremony, questions
											and answers with a Chinese professor, the history of "Silicon Valley" in
											China and the
											presentation of Uzbek culture and traditions to foreign students.
											The program ended with such useful experience as a demonstration of national
											traditions.
											Currently, selected teams are occupied by the presentation of their social
											projects with the help
											of IT decisions.
										</p>
										<a href="#" className="news_section_cardbox-card-txtbox-link">Read more</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="miniNews_section">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="miniNews_section_titlebox">
						<h1 className="miniNews_section_titlebox-title">More news...</h1>
					</div>
				</div>
				<div className="col-12">
					<div className="miniNews_section_cardbox">
						<div className="row">
							<div className="col-12 col-lg-4">
								<div className="miniNews_section_cardbox-card">
									<div className="miniNews_section_cardbox-card-datebox">
										<div className="miniNews_section_cardbox-card-datebox-pos">
											<p className="miniNews_section_cardbox-card-datebox-pos-date">
												02
											</p>
											<p className="miniNews_section_cardbox-card-datebox-pos-month">
												nov
											</p>
											<p className="miniNews_section_cardbox-card-datebox-pos-year">
												2021
											</p>
										</div>
									</div>
									<div className="miniNews_section_cardbox-card-textbox">
										<h5 className="miniNews_section_cardbox-card-textbox-title">
											PRESCHOOL and PRIMARY EDUCATION
										</h5>
										<a href="#" className="miniNews_section_cardbox-card-textbox-link">Read more</a>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="miniNews_section_cardbox-card">
									<div className="miniNews_section_cardbox-card-datebox">
										<div className="miniNews_section_cardbox-card-datebox-pos">
											<p className="miniNews_section_cardbox-card-datebox-pos-date">
												02
											</p>
											<p className="miniNews_section_cardbox-card-datebox-pos-month">
												nov
											</p>
											<p className="miniNews_section_cardbox-card-datebox-pos-year">
												2021
											</p>
										</div>
									</div>
									<div className="miniNews_section_cardbox-card-textbox">
										<h5 className="miniNews_section_cardbox-card-textbox-title">
											PRESCHOOL and PRIMARY EDUCATION
										</h5>
										<a href="#" className="miniNews_section_cardbox-card-textbox-link">Read more</a>
									</div>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="miniNews_section_cardbox-card">
									<div className="miniNews_section_cardbox-card-datebox">
										<div className="miniNews_section_cardbox-card-datebox-pos">
											<p className="miniNews_section_cardbox-card-datebox-pos-date">
												02
											</p>
											<p className="miniNews_section_cardbox-card-datebox-pos-month">
												nov
											</p>
											<p className="miniNews_section_cardbox-card-datebox-pos-year">
												2021
											</p>
										</div>
									</div>
									<div className="miniNews_section_cardbox-card-textbox">
										<h5 className="miniNews_section_cardbox-card-textbox-title">
											PRESCHOOL and PRIMARY EDUCATION
										</h5>
										<a href="#" className="miniNews_section_cardbox-card-textbox-link">Read more</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="statistics_section">
		<div className="container">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="statistics_section_cardbox">
							<div className="row">
								<div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
									<div className="statistics_section_cardbox-card">
										<div className="pos">
											<h1 className="statistics_section_cardbox-card-amount">35</h1>
											<div className="statistics_section_cardbox-card-underline"></div>
											<h4 className="statistics_section_cardbox-card-text">
												<span className="statistics_section_cardbox-card-text-span">MEMORANDA</span>
												<br /> OF UNDERSTANDING
											</h4>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
									<div className="statistics_section_cardbox-card">
										<div className="pos">
											<h1 className="statistics_section_cardbox-card-amount">320</h1>
											<div className="statistics_section_cardbox-card-underline"></div>
											<h4 className="statistics_section_cardbox-card-text">
												<span className="statistics_section_cardbox-card-text-span">Family</span>
												<br /> members
											</h4>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
									<div className="statistics_section_cardbox-card">
										<div className="pos">
											<h1 className="statistics_section_cardbox-card-amount">23</h1>
											<div className="statistics_section_cardbox-card-underline"></div>
											<h4 className="statistics_section_cardbox-card-text">
												<span className="statistics_section_cardbox-card-text-span">Bachelor</span>
												<br /> programs
											</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="stories_section">
		<div className="container">
			<div className="row">
				<div className="col-12 col-lg-7">
					<div className="stoeies_section_iframebox">
						<div className="row">
							<div className="col-12">
								<img src={video} alt="video"
									className="stories_section_iframebox-iframe" />
							</div>
							<div className="col-6">
								<img src={video2} alt="video2"
									className="stories_section_iframebox-iframe" />
							</div>
							<div className="col-6">
								<img src={video3} alt="video3"
									className="stories_section_iframebox-iframe" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-5">
					<div className="stories_section_textbox">
						<div className="stories_section_textbox-titlebox">
							<h1 className="stories_section_textbox-titlebox-title">
								successful stories of students
							</h1>
							<div className="stories_section_textbox-titlebox-underline"></div>
						</div>
						<p className="stories_section_textbox-text">
							Our Institute is consistently ranked as one of the top universities for graduate education
							in the Republic
							of Uzbekistan.
							<br /> <br />
							The main task of Yeoju Technical Institute in Tashkent is the preparation of highly
							qualified personnel
							and specialists with the modern professional skills demanded in the job market.
							<br /> <br />
							In this regard, curricula are formed taking into account modern requirements and the
							tendencies of the
							development of the economy as well as those agreed upon with basic and potential employers.
						</p>
						<a href="#" className="stories_section_textbox-link">View more <span
								className="stories_section_textbox-link-span">here</span></a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="partners_section">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="partners_section_titlebox">
						<h1 className="partners_section_titlebox-title">
							Our partners
							<div className="partners_section_titlebox-title-underline"></div>
						</h1>
					</div>
				</div>
				<div className="col-12">
					<div className="partners_section_partnersbox">
						<div className="row align-items-center justify-content-center">
							<div className="col-6 col-lg-2 d-flex align-items-center justify-content-center my-3">
								<img className="partners_section_partnersbox-img img-fluid"
									src={png1} alt="iubh" />
							</div>
							<div className="col-6 col-lg-2 d-flex align-items-center justify-content-center my-3">
								<img className="partners_section_partnersbox-img img-fluid"
									src={png2} alt="uzbekistan" />
							</div>
							<div className="col-6 col-lg-2 d-flex align-items-center justify-content-center my-3">
								<img className="partners_section_partnersbox-img img-fluid"
									src={png3} alt="hyatt" />
							</div>
							<div className="col-6 col-lg-2 d-flex align-items-center justify-content-center my-3">
								<img className="partners_section_partnersbox-img img-fluid"
									src={png4} alt="samrtcode" />
							</div>
							<div className="col-6 col-lg-2 d-flex align-items-center justify-content-center my-3">
								<img className="partners_section_partnersbox-img img-fluid"
									src={png5} alt="it-park" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</>
);
}

export default Main;