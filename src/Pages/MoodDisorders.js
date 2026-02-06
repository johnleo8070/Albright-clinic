import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RelatedArticles from "../Components/RelatedArticles";
import SEO from "../Components/SEO";
import moodDisordersImage from "../Assets/mood-disorders-image.jpg";
import "../Styles/ArticleContent.css";

function MoodDisorders() {
    return (
        <div className="article-page">
            <SEO
                title="Understanding Mood Disorders | Albright Clinic"
                description="Learn about mood disorders, types, symptoms, and effective treatment options. Professional mental health care in Richmond, TX."
                type="article"
            />
            <Navbar />

            <div className="article-section">
                <div className="article-header">
                    <h1 className="article-title">Understanding Mood Disorders</h1>
                    <p className="article-intro">
                        Mood disorders are a group of mental health conditions characterized by significant disturbances in a person's
                        emotional state. These disorders can affect how someone feels, thinks, and functions in daily life, often
                        interfering with work, relationships, and overall well-being. Mood disorders are more than temporary feelings
                        of sadness or happiness—they involve persistent or extreme emotional shifts.
                    </p>
                </div>

                <img src={moodDisordersImage} alt="Understanding Mood Disorders" className="article-image" />

                <div className="article-content">
                    <div className="article-content-section">
                        <h2 className="section-title">What Are Mood Disorders?</h2>
                        <p className="section-text">
                            Mood disorders, also called affective disorders, are conditions where a person experiences prolonged
                            emotional states, either depressive, manic, or mixed. They are caused by a combination of genetic,
                            biological, environmental, and psychological factors.
                        </p>

                        <h3 className="section-subtitle">Common types include:</h3>
                        <ul className="article-list">
                            <li>
                                <strong>Major Depressive Disorder (MDD):</strong> Persistent sadness, loss of interest or pleasure,
                                fatigue, and other symptoms lasting at least two weeks.
                            </li>
                            <li>
                                <strong>Bipolar Disorder:</strong> Characterized by alternating episodes of depression and mania or
                                hypomania. Types include Bipolar I, Bipolar II, and Cyclothymic Disorder.
                            </li>
                            <li>
                                <strong>Persistent Depressive Disorder (Dysthymia):</strong> Chronic, low-level depression lasting
                                two years or more.
                            </li>
                            <li>
                                <strong>Seasonal Affective Disorder (SAD):</strong> Depression occurring at certain times of the year,
                                often in winter.
                            </li>
                            <li>
                                <strong>Cyclothymic Disorder:</strong> Milder, chronic mood swings that do not meet the criteria for
                                full bipolar disorder.
                            </li>
                        </ul>
                    </div>



                    <div className="article-content-section">
                        <h2 className="section-title">Living with Mood Disorders</h2>
                        <p className="section-text">
                            While mood disorders can be chronic, effective treatment helps individuals manage symptoms, reduce the
                            severity of episodes, and lead fulfilling lives. Early intervention, ongoing care, and strong social
                            support improve long-term outcomes.
                        </p>
                    </div>

                    <div className="article-content-section">
                        <h2 className="section-title">When to Seek Help</h2>
                        <p className="section-text">
                            Seek professional help if mood changes interfere with daily life, relationships, or work, or if there
                            are thoughts of self-harm or suicide. Timely treatment reduces complications and improves quality of life.
                        </p>
                    </div>
                </div>

                <RelatedArticles currentArticleId="mood-disorders" />
            </div>

            <Footer />
        </div>
    );
}

export default MoodDisorders;
