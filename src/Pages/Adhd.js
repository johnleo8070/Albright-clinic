import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RelatedArticles from "../Components/RelatedArticles";
import SEO from "../Components/SEO";
import adhdImage from "../Assets/adhd-image.jpg";
import "../Styles/ArticleContent.css";

function Adhd() {
    return (
        <div className="article-page">
            <SEO
                title="Understanding ADHD | Albright Clinic"
                description="Learn about ADHD, symptoms, types, and effective management strategies. Professional mental health care in Richmond, TX."
                type="article"
            />
            <Navbar />

            <div className="article-section">
                <div className="article-header">
                    <h1 className="article-title">Understanding ADHD</h1>
                    <p className="article-intro">
                        Attention-Deficit/Hyperactivity Disorder (ADHD) is a common neurodevelopmental disorder that affects both
                        children and adults. It is characterized by difficulties with attention, hyperactivity, and impulsivity,
                        which can interfere with daily functioning, learning, and relationships. Despite its challenges, ADHD is
                        manageable with proper strategies and support.
                    </p>
                </div>

                <img src={adhdImage} alt="Understanding ADHD - Inattention and Hyperactivity" className="article-image" />

                <div className="article-content">
                    <div className="article-content-section">
                        <h2 className="section-title">What is ADHD?</h2>
                        <p className="section-text">
                            ADHD is a brain-based disorder that affects how individuals focus, control impulses, and regulate energy
                            levels. It is not a result of laziness or poor parenting, but rather a combination of genetic, neurological,
                            and environmental factors.
                        </p>

                        <h3 className="section-subtitle">There are three primary types of ADHD:</h3>
                        <ul className="article-list">
                            <li>
                                <strong>Predominantly Inattentive Presentation:</strong> Difficulty sustaining attention, following
                                instructions, and organizing tasks. Often referred to as ADD (Attention Deficit Disorder).
                            </li>
                            <li>
                                <strong>Predominantly Hyperactive-Impulsive Presentation:</strong> Excessive fidgeting, restlessness,
                                impulsive behavior, and difficulty staying still.
                            </li>
                            <li>
                                <strong>Combined Presentation:</strong> Symptoms of both inattention and hyperactivity-impulsivity
                                are present.
                            </li>
                        </ul>
                    </div>



                    <div className="article-content-section">
                        <h2 className="section-title">Living with ADHD</h2>
                        <p className="section-text">
                            With proper treatment and support, individuals with ADHD can thrive in school, work, and personal
                            relationships. Many adults with ADHD report creativity, high energy, and out-of-the-box thinking as
                            strengths when managed effectively. Early recognition, consistent strategies, and understanding
                            environments are crucial for success.
                        </p>
                    </div>

                    <div className="article-content-section">
                        <h2 className="section-title">When to Seek Help</h2>
                        <p className="section-text">
                            Seek professional help if symptoms significantly impact daily life, work, school, or relationships.
                            Early intervention improves outcomes and helps prevent secondary issues such as low self-esteem, anxiety,
                            or depression.
                        </p>
                    </div>
                </div>

                <RelatedArticles currentArticleId="adhd" />
            </div>

            <Footer />
        </div>
    );
}

export default Adhd;
