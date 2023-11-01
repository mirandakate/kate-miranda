import React from "react";
import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import LogoSection from "@/components/LogoSection";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

interface HomeProps {

}

const Home: React.FunctionComponent<HomeProps> = (props) => {
	return (
		<div className="bg-white">
			<header>
				<Navbar />
			</header>
			<main>
				<MainSection />
				<LogoSection />
				<AboutMe />
				<Skills />
				<Experience />
			</main>
			<Footer />
		</div>
	)
}

export default Home