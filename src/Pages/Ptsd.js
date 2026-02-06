import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RelatedArticles from "../Components/RelatedArticles";
import SEO from "../Components/SEO";
import ptsdImage from "../Assets/ptsd-image.jpg";
import "../Styles/ArticleContent.css";

function Ptsd() {
    return (
        <div className="article-page">
            <SEO
                title="Understanding PTSD & Trauma-Related Disorders | Albright Clinic"
                description="Learn about PTSD, trauma-related disorders, symptoms, and effective treatment. Professional mental health care in Richmond, TX."
                type="article"
            />
            <Navbar />

            <div className="article-section">
                <div className="article-header">
                    <h1 className="article-title">Understanding PTSD and Trauma-Related Disorders</h1>
                    <p className="article-intro">
                        Post-Traumatic Stress Disorder (PTSD) and other trauma-related disorders are mental health conditions that
                        can develop after experiencing or witnessing a traumatic event. Trauma can include experiences such as
                        physical or sexual assault, accidents, natural disasters, war, or any event that threatens a person's safety
                        or sense of security. While many people experience distress after trauma, PTSD occurs when these symptoms
                        persist and interfere with daily life.
                    </p>
                </div>

                <img src={ptsdImage} alt="Understanding PTSD and Trauma-Related Disorders" className="article-image" />

                <div className="article-content">
                    <div className="article-content-section">
                        <h2 className="section-title">What is PTSD?</h2>
                        <p className="section-text">
                            PTSD is a psychiatric disorder that occurs after exposure to a traumatic event. People with PTSD may
                            relive the trauma through intrusive memories, nightmares, or flashbacks. They may also experience
                            heightened anxiety, emotional numbness, and avoidance of reminders of the event.
                        </p>

                        <h3 className="section-subtitle">Other trauma-related disorders include:</h3>
                        <ul className="article-list">
                            <li>
                                <strong>Acute Stress Disorder (ASD):</strong> Symptoms similar to PTSD that occur immediately after
                                trauma and last less than a month.
                            </li>
                            <li>
                                <strong>Adjustment Disorders:</strong> Emotional or behavioral responses to a stressful event that
                                are more intense than expected but do not meet full PTSD criteria.
                            </li>
                            <li>
                                <strong>Reactive Attachment Disorder & Disinhibited Social Engagement Disorder:</strong> Disorders in
                                children resulting from early-life trauma or neglect.
                            </li>
                            <li>
                                <strong>Complex PTSD (C-PTSD):</strong> Occurs after prolonged or repeated trauma, often involving
                                interpersonal abuse, with symptoms beyond standard PTSD, such as difficulties in emotional regulation
                                and self-perception.
                            </li>
                        </ul>
                    </div>



                    <div className="article-content-section">
                        <h2 className="section-title">Living with PTSD</h2>
                        <p className="section-text">
                            Recovery from PTSD is possible, though it may take time. Healing involves rebuilding safety, processing
                            traumatic memories, and developing coping strategies. Support from mental health professionals, loved ones,
                            and trauma-informed care environments plays a critical role in recovery.
                        </p>
                    </div>

                    <div className="article-content-section">
                        <h2 className="section-title">When to Seek Help</h2>
                        <p className="section-text">Immediate help is necessary if someone experiences:</p>
                        <ul className="article-list">
                            <li>Intense flashbacks or dissociation</li>
                            <li>Suicidal thoughts or self-harm</li>
                            <li>Inability to function in daily life</li>
                        </ul>
                        <p className="section-text">
                            Professional help is essential for safe and effective recovery. Early intervention improves long-term outcomes.
                        </p>
                    </div>
                </div>

                <RelatedArticles currentArticleId="ptsd" />
            </div>

            <Footer />
        </div>
    );
}

export default Ptsd;
