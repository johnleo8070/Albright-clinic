import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RelatedArticles from "../Components/RelatedArticles";
import SEO from "../Components/SEO";
import bipolarImage from "../Assets/bipolar-image.jpg";
import "../Styles/ArticleContent.css";

function Bipolar() {
    return (
        <div className="article-page">
            <SEO
                title="Understanding Bipolar Disorder | Albright Clinic"
                description="Learn about bipolar disorder, its types, symptoms, and treatment options. Albright Clinic provides professional mental health care in Richmond, TX."
                type="article"
            />
            <Navbar />

            <div className="article-section">
                <div className="article-header">
                    <h1 className="article-title">Understanding Bipolar Disorder</h1>
                    <p className="article-intro">
                        Bipolar disorder, formerly known as manic-depressive illness, is a complex mental health condition
                        characterized by extreme mood swings. These mood changes range from emotional highs (mania or hypomania)
                        to lows (depression), and they can significantly impact a person's daily life, relationships, and overall
                        functioning. Despite its challenges, bipolar disorder is manageable with proper treatment and support.
                    </p>
                </div>

                <img src={bipolarImage} alt="Understanding Bipolar Disorder" className="article-image" />

                <div className="article-content">
                    <div className="article-content-section">
                        <h2 className="section-title">What is Bipolar Disorder?</h2>
                        <p className="section-text">
                            Bipolar disorder is a mood disorder that affects how individuals experience emotions. Unlike the typical
                            ups and downs everyone experiences, the mood swings in bipolar disorder are intense, long-lasting, and
                            often interfere with daily activities. There are several types of bipolar disorder:
                        </p>

                        <ul className="article-list">
                            <li>
                                <strong>Bipolar I Disorder:</strong> Defined by manic episodes lasting at least seven days or severe
                                mania requiring hospitalization. Depressive episodes are common but not necessary for diagnosis.
                            </li>
                            <li>
                                <strong>Bipolar II Disorder:</strong> Characterized by patterns of depressive episodes and hypomanic
                                episodes (less severe mania).
                            </li>
                            <li>
                                <strong>Cyclothymic Disorder:</strong> Involves periods of hypomanic symptoms and depressive symptoms
                                lasting at least two years, but the symptoms do not meet the criteria for full mania or major depression.
                            </li>
                            <li>
                                <strong>Other Specified and Unspecified Bipolar and Related Disorders:</strong> Mood disturbances that
                                do not fit into the above categories but still involve significant mood changes.
                            </li>
                        </ul>
                    </div>



                    <div className="article-content-section">
                        <h2 className="section-title">Living with Bipolar Disorder</h2>
                        <p className="section-text">
                            Managing bipolar disorder requires ongoing effort, but many people lead fulfilling lives with proper
                            treatment. Support from family, friends, and mental health professionals plays a crucial role. Early
                            diagnosis, consistent treatment, and self-awareness can reduce the severity of mood episodes and improve
                            quality of life.
                        </p>
                    </div>

                    <div className="article-content-section">
                        <h2 className="section-title">When to Seek Help</h2>
                        <p className="section-text">
                            Immediate help is necessary if someone experiences severe depression with thoughts of self-harm, extreme
                            mania, or psychosis. Mental health professionals, crisis hotlines, and emergency services are essential
                            resources during these critical times.
                        </p>
                    </div>
                </div>

                <RelatedArticles currentArticleId="bipolar" />
            </div>

            <Footer />
        </div>
    );
}

export default Bipolar;
