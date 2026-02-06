import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RelatedArticles from "../Components/RelatedArticles";
import SEO from "../Components/SEO";
import anxietyImage from "../Assets/anxiety-image.jpg";
import "../Styles/ArticleContent.css";

function Anxiety() {
    return (
        <div className="article-page">
            <SEO
                title="Understanding Anxiety Disorders | Albright Clinic"
                description="Learn about anxiety disorders, types, symptoms, and effective treatment. Professional mental health care in Richmond, TX."
                type="article"
            />
            <Navbar />

            <div className="article-section">
                <div className="article-header">
                    <h1 className="article-title">Understanding Anxiety Disorders</h1>
                    <p className="article-intro">
                        Anxiety is a natural response to stress, but when it becomes overwhelming, persistent, or interferes with
                        daily life, it may be classified as an anxiety disorder. Anxiety disorders are among the most common mental
                        health conditions worldwide, affecting millions of people of all ages.
                    </p>
                </div>

                <img src={anxietyImage} alt="Understanding Anxiety Disorders" className="article-image" />

                <div className="article-content">
                    <div className="article-content-section">
                        <h2 className="section-title">What is an Anxiety Disorder?</h2>
                        <p className="section-text">
                            An anxiety disorder is a mental health condition characterized by excessive fear, worry, or nervousness.
                            Unlike everyday stress or anxiety, these feelings are often intense, difficult to control, and last for
                            months, impacting personal, social, and occupational functioning.
                        </p>

                        <h3 className="section-subtitle">There are several types of anxiety disorders:</h3>
                        <ul className="article-list">
                            <li>
                                <strong>Generalized Anxiety Disorder (GAD):</strong> Persistent and excessive worry about everyday
                                life events, often accompanied by physical symptoms like muscle tension or fatigue.
                            </li>
                            <li>
                                <strong>Panic Disorder:</strong> Recurrent, unexpected panic attacks—sudden episodes of intense fear
                                with physical symptoms such as a racing heart, shortness of breath, or dizziness.
                            </li>
                            <li>
                                <strong>Social Anxiety Disorder:</strong> Extreme fear of social situations or being judged by others,
                                leading to avoidance of social interactions.
                            </li>
                            <li>
                                <strong>Specific Phobias:</strong> Intense, irrational fear of specific objects or situations (e.g.,
                                heights, animals, flying).
                            </li>
                            <li>
                                <strong>Agoraphobia:</strong> Fear of being in situations where escape may be difficult, often leading
                                to avoidance of public spaces.
                            </li>
                            <li>
                                <strong>Separation Anxiety Disorder:</strong> Excessive fear or worry about being apart from loved ones,
                                not limited to children.
                            </li>
                        </ul>
                    </div>



                    <div className="article-content-section">
                        <h2 className="section-title">Living with Anxiety Disorders</h2>
                        <p className="section-text">
                            With proper treatment, most people with anxiety disorders can lead fulfilling and productive lives.
                            Support from family, friends, and mental health professionals is critical. Self-awareness and early
                            intervention can prevent symptoms from worsening.
                        </p>
                    </div>

                    <div className="article-content-section">
                        <h2 className="section-title">When to Seek Help</h2>
                        <p className="section-text">
                            Immediate help is needed if anxiety is causing severe distress, panic attacks, or thoughts of self-harm.
                            Mental health professionals, therapists, and crisis hotlines provide essential support in such situations.
                        </p>
                    </div>
                </div>

                <RelatedArticles currentArticleId="anxiety" />
            </div>

            <Footer />
        </div>
    );
}

export default Anxiety;
