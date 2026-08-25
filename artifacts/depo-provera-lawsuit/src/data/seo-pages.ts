export interface StatePage {
  slug: string;
  name: string;
  capital: string;
  filingDeadline: string;
  notes: string;
}

export interface CityPage {
  slug: string;
  name: string;
  state: string;
  population: string;
  courts: string;
}

export interface InjuryPage {
  slug: string;
  name: string;
  medicalTerm: string;
  description: string;
  symptoms: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  description: string;
  content: string;
}

export interface InfoPage {
  slug: string;
  title: string;
  description: string;
  content: string;
}

export const states: StatePage[] = [
  { slug: "alabama", name: "Alabama", capital: "Montgomery", filingDeadline: "2 years from discovery", notes: "Alabama applies the discovery rule, meaning the clock starts when you knew or reasonably should have known about your injury and its link to Depo-Provera." },
  { slug: "alaska", name: "Alaska", capital: "Juneau", filingDeadline: "2 years from discovery", notes: "Alaska's statute of limitations runs 2 years from the date of discovery. Courts have been receptive to pharmaceutical injury claims with strong medical evidence." },
  { slug: "arizona", name: "Arizona", capital: "Phoenix", filingDeadline: "2 years from discovery", notes: "Arizona follows a 2-year discovery rule for product liability claims. The state has seen a growing number of Depo-Provera meningioma cases filed in federal court." },
  { slug: "arkansas", name: "Arkansas", capital: "Little Rock", filingDeadline: "3 years from discovery", notes: "Arkansas gives victims 3 years from the date of discovery to file a claim, offering a somewhat longer window than many other states." },
  { slug: "california", name: "California", capital: "Sacramento", filingDeadline: "2 years from discovery", notes: "California has some of the strongest consumer protection laws in the nation. The state's discovery rule pauses the clock until a victim reasonably connects their diagnosis to Depo-Provera." },
  { slug: "colorado", name: "Colorado", capital: "Denver", filingDeadline: "2 years from discovery", notes: "Colorado applies a 2-year statute of limitations for product liability claims. Colorado courts have strong precedent supporting pharmaceutical injury victims." },
  { slug: "connecticut", name: "Connecticut", capital: "Hartford", filingDeadline: "3 years from discovery", notes: "Connecticut allows 3 years from the date of discovery. The state has active plaintiffs' bars experienced in complex pharmaceutical litigation." },
  { slug: "delaware", name: "Delaware", capital: "Dover", filingDeadline: "2 years from discovery", notes: "Delaware's 2-year discovery rule applies. Many major pharmaceutical companies are incorporated in Delaware, giving courts significant experience with drug injury cases." },
  { slug: "florida", name: "Florida", capital: "Tallahassee", filingDeadline: "2 years from discovery", notes: "Florida recently tightened its statutes of limitations. Victims have 2 years from the date of discovery. Florida has a large pool of Depo-Provera users and an active litigation landscape." },
  { slug: "georgia", name: "Georgia", capital: "Atlanta", filingDeadline: "2 years from discovery", notes: "Georgia applies a 2-year statute of limitations for product liability claims. Courts in the Northern District of Georgia have handled numerous pharmaceutical mass tort cases." },
  { slug: "hawaii", name: "Hawaii", capital: "Honolulu", filingDeadline: "2 years from discovery", notes: "Hawaii's discovery rule starts the clock when you knew or should have known about the injury and its cause. The state has favorable consumer protection statutes." },
  { slug: "idaho", name: "Idaho", capital: "Boise", filingDeadline: "2 years from discovery", notes: "Idaho applies a 2-year discovery rule. Victims in rural areas of Idaho may have experienced delayed diagnoses, which can affect how courts calculate the limitation period." },
  { slug: "illinois", name: "Illinois", capital: "Springfield", filingDeadline: "2 years from discovery", notes: "Illinois has a 2-year statute of limitations with a strong discovery rule. The Northern District of Illinois is a well-established venue for pharmaceutical mass tort litigation." },
  { slug: "indiana", name: "Indiana", capital: "Indianapolis", filingDeadline: "2 years from discovery", notes: "Indiana's product liability statute runs 2 years from discovery. The state has seen significant pharmaceutical litigation related to contraceptive products." },
  { slug: "iowa", name: "Iowa", capital: "Des Moines", filingDeadline: "2 years from discovery", notes: "Iowa applies a 2-year limitations period for product liability claims. Courts have been supportive of victims who experienced delayed diagnoses due to atypical meningioma symptoms." },
  { slug: "kansas", name: "Kansas", capital: "Topeka", filingDeadline: "2 years from discovery", notes: "Kansas gives victims 2 years from discovery. Kansas courts apply a liberal interpretation of the discovery rule in pharmaceutical injury cases." },
  { slug: "kentucky", name: "Kentucky", capital: "Frankfort", filingDeadline: "1 year from discovery", notes: "Kentucky has a shorter 1-year statute of limitations for product liability claims. If you have been diagnosed with a meningioma in Kentucky, time is especially critical — contact us immediately." },
  { slug: "louisiana", name: "Louisiana", capital: "Baton Rouge", filingDeadline: "1 year from discovery", notes: "Louisiana's civil law system gives victims only 1 year from discovery (called 'prescription'). Do not delay — Louisiana's deadline is the shortest in the nation." },
  { slug: "maine", name: "Maine", capital: "Augusta", filingDeadline: "6 years from discovery", notes: "Maine has one of the longest statutes of limitations in the country at 6 years from the date of discovery, giving victims more time to build their case." },
  { slug: "maryland", name: "Maryland", capital: "Annapolis", filingDeadline: "3 years from discovery", notes: "Maryland allows 3 years from discovery. The state has active consumer protection laws and a well-developed pharmaceutical litigation environment in the Baltimore-area federal courts." },
  { slug: "massachusetts", name: "Massachusetts", capital: "Boston", filingDeadline: "3 years from discovery", notes: "Massachusetts applies a 3-year discovery rule. Boston's federal court has significant experience handling complex pharmaceutical and medical device litigation." },
  { slug: "michigan", name: "Michigan", capital: "Lansing", filingDeadline: "3 years from discovery", notes: "Michigan gives victims 3 years from the date of discovery. Michigan's product liability law includes provisions favorable to pharmaceutical injury victims." },
  { slug: "minnesota", name: "Minnesota", capital: "Saint Paul", filingDeadline: "4 years from discovery", notes: "Minnesota offers a generous 4-year discovery period. The state has strong consumer protection statutes and an experienced plaintiffs' bar in pharmaceutical litigation." },
  { slug: "mississippi", name: "Mississippi", capital: "Jackson", filingDeadline: "3 years from discovery", notes: "Mississippi applies a 3-year discovery rule. Courts in Mississippi have increasingly seen pharmaceutical mass tort claims and have experienced judges in this area." },
  { slug: "missouri", name: "Missouri", capital: "Jefferson City", filingDeadline: "5 years from discovery", notes: "Missouri has one of the longer statutes at 5 years from discovery. However, victims should never delay — memories fade and evidence can be lost over time." },
  { slug: "montana", name: "Montana", capital: "Helena", filingDeadline: "3 years from discovery", notes: "Montana applies a 3-year discovery rule. Montana has specific provisions in its product liability statute that support pharmaceutical injury claims." },
  { slug: "nebraska", name: "Nebraska", capital: "Lincoln", filingDeadline: "4 years from discovery", notes: "Nebraska gives victims 4 years from discovery. Nebraska courts have developed solid precedent for product liability claims against pharmaceutical manufacturers." },
  { slug: "nevada", name: "Nevada", capital: "Carson City", filingDeadline: "3 years from discovery", notes: "Nevada applies a 3-year discovery rule. Las Vegas-area federal courts have seen increasing pharmaceutical litigation and have streamlined processes for mass tort cases." },
  { slug: "new-hampshire", name: "New Hampshire", capital: "Concord", filingDeadline: "3 years from discovery", notes: "New Hampshire allows 3 years from discovery. The state has strong consumer protection laws and courts sympathetic to pharmaceutical injury victims." },
  { slug: "new-jersey", name: "New Jersey", capital: "Trenton", filingDeadline: "2 years from discovery", notes: "New Jersey has a 2-year discovery rule. Given New Jersey's position as a pharmaceutical industry hub, courts have deep expertise in drug product liability cases." },
  { slug: "new-mexico", name: "New Mexico", capital: "Santa Fe", filingDeadline: "3 years from discovery", notes: "New Mexico applies a 3-year discovery rule. New Mexico has strong consumer protection statutes that can enhance a Depo-Provera victim's legal options." },
  { slug: "new-york", name: "New York", capital: "Albany", filingDeadline: "3 years from discovery", notes: "New York allows 3 years from discovery. New York's Southern and Eastern Districts are among the busiest pharmaceutical litigation venues in the country." },
  { slug: "north-carolina", name: "North Carolina", capital: "Raleigh", filingDeadline: "3 years from discovery", notes: "North Carolina applies a 3-year discovery rule with a 10-year statute of repose. Courts in the Middle District have handled significant pharmaceutical mass tort litigation." },
  { slug: "north-dakota", name: "North Dakota", capital: "Bismarck", filingDeadline: "6 years from discovery", notes: "North Dakota has one of the most generous statutes of limitations at 6 years from discovery, giving victims significant time to pursue their claims." },
  { slug: "ohio", name: "Ohio", capital: "Columbus", filingDeadline: "2 years from discovery", notes: "Ohio has a 2-year discovery rule. Northern Ohio's federal courts are a major hub for pharmaceutical mass tort litigation, with experienced judges and established procedures." },
  { slug: "oklahoma", name: "Oklahoma", capital: "Oklahoma City", filingDeadline: "2 years from discovery", notes: "Oklahoma applies a 2-year discovery rule. Oklahoma courts have been receptive to pharmaceutical liability claims where manufacturers failed to adequately warn consumers." },
  { slug: "oregon", name: "Oregon", capital: "Salem", filingDeadline: "2 years from discovery", notes: "Oregon has a 2-year statute of limitations with a strong discovery rule. Oregon courts have robust consumer protection precedents that benefit pharmaceutical injury victims." },
  { slug: "pennsylvania", name: "Pennsylvania", capital: "Harrisburg", filingDeadline: "2 years from discovery", notes: "Pennsylvania applies a 2-year discovery rule. Philadelphia's federal court is one of the most active pharmaceutical mass tort venues in the United States." },
  { slug: "rhode-island", name: "Rhode Island", capital: "Providence", filingDeadline: "3 years from discovery", notes: "Rhode Island gives victims 3 years from discovery. While a small state, Rhode Island has well-developed consumer protection laws and experienced plaintiffs' attorneys." },
  { slug: "south-carolina", name: "South Carolina", capital: "Columbia", filingDeadline: "3 years from discovery", notes: "South Carolina applies a 3-year discovery rule. Courts in South Carolina have seen an increase in pharmaceutical product liability claims in recent years." },
  { slug: "south-dakota", name: "South Dakota", capital: "Pierre", filingDeadline: "6 years from discovery", notes: "South Dakota has an unusually long 6-year statute of limitations from discovery, offering victims a longer window to understand their injury and take action." },
  { slug: "tennessee", name: "Tennessee", capital: "Nashville", filingDeadline: "1 year from discovery", notes: "Tennessee has a short 1-year statute of limitations from discovery. If you received Depo-Provera in Tennessee and have been diagnosed with a meningioma, act now." },
  { slug: "texas", name: "Texas", capital: "Austin", filingDeadline: "2 years from discovery", notes: "Texas applies a 2-year discovery rule. Texas has one of the largest Depo-Provera user populations in the country, and its federal courts have extensive pharmaceutical litigation experience." },
  { slug: "utah", name: "Utah", capital: "Salt Lake City", filingDeadline: "2 years from discovery", notes: "Utah applies a 2-year discovery rule for product liability claims. Utah courts have been increasingly active in pharmaceutical injury litigation." },
  { slug: "vermont", name: "Vermont", capital: "Montpelier", filingDeadline: "3 years from discovery", notes: "Vermont allows 3 years from discovery. Vermont's strong consumer protection framework provides additional legal avenues for Depo-Provera victims." },
  { slug: "virginia", name: "Virginia", capital: "Richmond", filingDeadline: "2 years from discovery", notes: "Virginia applies a 2-year discovery rule. Virginia's Eastern District, which includes the Alexandria Division, is known for its efficient handling of complex civil litigation." },
  { slug: "washington", name: "Washington", capital: "Olympia", filingDeadline: "3 years from discovery", notes: "Washington State gives victims 3 years from discovery. Washington has strong product liability statutes and courts experienced in pharmaceutical mass tort cases." },
  { slug: "west-virginia", name: "West Virginia", capital: "Charleston", filingDeadline: "2 years from discovery", notes: "West Virginia has a 2-year discovery rule. The state has a history of significant pharmaceutical litigation and courts familiar with complex drug injury claims." },
  { slug: "wisconsin", name: "Wisconsin", capital: "Madison", filingDeadline: "3 years from discovery", notes: "Wisconsin gives victims 3 years from discovery. Wisconsin has strong consumer protection laws and courts receptive to pharmaceutical product liability claims." },
  { slug: "wyoming", name: "Wyoming", capital: "Cheyenne", filingDeadline: "4 years from discovery", notes: "Wyoming applies a 4-year discovery rule for product liability claims. Wyoming courts have developed fair and balanced approaches to pharmaceutical injury litigation." },
];

export const cities: CityPage[] = [
  { slug: "new-york-ny", name: "New York", state: "NY", population: "8.3 million", courts: "Southern District of New York (Manhattan) and Eastern District of New York (Brooklyn)" },
  { slug: "los-angeles-ca", name: "Los Angeles", state: "CA", population: "3.9 million", courts: "Central District of California" },
  { slug: "chicago-il", name: "Chicago", state: "IL", population: "2.7 million", courts: "Northern District of Illinois" },
  { slug: "houston-tx", name: "Houston", state: "TX", population: "2.3 million", courts: "Southern District of Texas" },
  { slug: "phoenix-az", name: "Phoenix", state: "AZ", population: "1.6 million", courts: "District of Arizona" },
  { slug: "philadelphia-pa", name: "Philadelphia", state: "PA", population: "1.6 million", courts: "Eastern District of Pennsylvania" },
  { slug: "san-antonio-tx", name: "San Antonio", state: "TX", population: "1.5 million", courts: "Western District of Texas" },
  { slug: "san-diego-ca", name: "San Diego", state: "CA", population: "1.4 million", courts: "Southern District of California" },
  { slug: "dallas-tx", name: "Dallas", state: "TX", population: "1.3 million", courts: "Northern District of Texas" },
  { slug: "san-jose-ca", name: "San Jose", state: "CA", population: "1.0 million", courts: "Northern District of California" },
  { slug: "austin-tx", name: "Austin", state: "TX", population: "978,000", courts: "Western District of Texas" },
  { slug: "jacksonville-fl", name: "Jacksonville", state: "FL", population: "949,000", courts: "Middle District of Florida" },
  { slug: "fort-worth-tx", name: "Fort Worth", state: "TX", population: "935,000", courts: "Northern District of Texas" },
  { slug: "columbus-oh", name: "Columbus", state: "OH", population: "905,000", courts: "Southern District of Ohio" },
  { slug: "charlotte-nc", name: "Charlotte", state: "NC", population: "874,000", courts: "Western District of North Carolina" },
];

export const injuries: InjuryPage[] = [
  {
    slug: "meningioma",
    name: "Brain Meningioma Tumor",
    medicalTerm: "Meningioma",
    description: "Meningiomas are tumors that arise from the meninges — the membranes that surround the brain and spinal cord. While many meningiomas are benign, they can grow large enough to press on the brain, causing serious neurological symptoms. Multiple studies have established a strong statistical link between long-term Depo-Provera use and the development of meningiomas.",
    symptoms: ["Persistent headaches", "Vision problems or double vision", "Memory loss or cognitive changes", "Seizures", "Weakness in arms or legs", "Hearing loss", "Loss of smell", "Difficulty speaking"],
  },
  {
    slug: "intracranial-meningioma",
    name: "Intracranial Meningioma",
    medicalTerm: "Intracranial Meningioma",
    description: "Intracranial meningiomas develop within the skull and can press on the brain itself. These tumors can disrupt normal brain function even when technically benign. Research published in the British Medical Journal found that women who used Depo-Provera for more than one year had a significantly elevated risk of developing intracranial meningiomas.",
    symptoms: ["Severe recurring headaches", "Focal neurological deficits", "Cognitive impairment", "Personality or behavior changes", "Balance problems", "Facial numbness or tingling", "Papilledema (swelling of the optic disc)", "Hydrocephalus in severe cases"],
  },
  {
    slug: "brain-tumor",
    name: "Brain Tumor",
    medicalTerm: "Intracranial Neoplasm",
    description: "Long-term use of Depo-Provera has been associated with an increased risk of intracranial tumors, particularly meningiomas. The progestin medroxyprogesterone acetate in Depo-Provera may stimulate hormone receptors on tumor cells, promoting growth. Any brain tumor diagnosis following Depo-Provera use warrants evaluation for a potential legal claim.",
    symptoms: ["Headaches that worsen over time", "Unexplained nausea or vomiting", "Seizures with no prior history", "Vision, hearing, or speech changes", "Difficulty with balance", "Extreme fatigue", "Mental status changes", "Personality shifts"],
  },
  {
    slug: "spinal-meningioma",
    name: "Spinal Meningioma",
    medicalTerm: "Spinal Meningioma",
    description: "While intracranial meningiomas are most commonly linked to Depo-Provera, spinal meningiomas — tumors arising from the membranes surrounding the spinal cord — also represent a serious risk. Spinal meningiomas can compress the spinal cord, leading to pain, numbness, and in severe cases, paralysis.",
    symptoms: ["Back pain that worsens over time", "Leg weakness or numbness", "Bowel or bladder dysfunction", "Difficulty walking", "Radiating pain down the legs", "Loss of sensation in extremities", "Muscle spasms", "Loss of reflexes"],
  },
  {
    slug: "bone-density-loss",
    name: "Bone Density Loss / Osteoporosis",
    medicalTerm: "Osteoporosis / Bone Mineral Density Loss",
    description: "The FDA issued a black box warning noting that Depo-Provera causes significant loss of bone mineral density (BMD). Long-term use can result in osteoporosis — especially concerning for young women whose bones are still developing. Some women experience BMD loss that does not fully recover after stopping the injections.",
    symptoms: ["Increased risk of fractures", "Back pain from spinal fractures", "Loss of height over time", "Stooped posture", "Brittle nails and hair", "Dental complications from jaw bone loss", "Hip and wrist fracture risk", "Chronic musculoskeletal pain"],
  },
  {
    slug: "depression-anxiety",
    name: "Depression and Anxiety",
    medicalTerm: "Major Depressive Disorder / Generalized Anxiety Disorder",
    description: "Depo-Provera's hormonal impact on the brain has been linked to significant mood disorders, including depression and anxiety. Studies suggest that medroxyprogesterone acetate can alter neurotransmitter activity and reduce the brain's sensitivity to natural mood regulators, leading to debilitating mental health conditions.",
    symptoms: ["Persistent sadness or hopelessness", "Severe anxiety and panic attacks", "Loss of interest in activities", "Suicidal thoughts", "Extreme fatigue and low energy", "Difficulty concentrating", "Insomnia or hypersomnia", "Social withdrawal"],
  },
  {
    slug: "weight-gain",
    name: "Significant Weight Gain",
    medicalTerm: "Drug-Induced Weight Gain / Metabolic Changes",
    description: "Weight gain is one of the most commonly reported side effects of Depo-Provera, and for many women, the gain is dramatic and difficult to reverse even after stopping the injections. Studies have shown average gains of 11 pounds or more after two years of use, with significant metabolic and hormonal disruption.",
    symptoms: ["Rapid or unexplained weight gain", "Increased appetite", "Difficulty losing weight", "Changes in body composition", "Increased fatigue", "Joint pain from added weight", "Elevated blood sugar levels", "Body image and mental health impacts"],
  },
  {
    slug: "irregular-bleeding",
    name: "Irregular Bleeding",
    medicalTerm: "Menstrual Irregularity / Abnormal Uterine Bleeding",
    description: "Depo-Provera frequently causes unpredictable and abnormal menstrual bleeding. Some women experience prolonged heavy bleeding, while others have spotting for months. For many, menstrual cycles do not return to normal for months or years after stopping the injection — interfering with fertility planning and quality of life.",
    symptoms: ["Prolonged heavy bleeding", "Irregular spotting between periods", "Absence of periods (amenorrhea)", "Severe cramping", "Anemia from blood loss", "Delayed return of normal cycles", "Fertility planning difficulties", "Hormonal imbalance symptoms"],
  },
  {
    slug: "infertility",
    name: "Infertility / Fertility Issues",
    medicalTerm: "Delayed Return to Fertility / Infertility",
    description: "Many women experience a significant delay in returning to fertility after stopping Depo-Provera. While manufacturers characterize this as temporary, some women face delays of 12 to 18 months or longer — and some never fully recover. For women who were not adequately warned about this risk, the emotional and financial toll can be devastating.",
    symptoms: ["Inability to conceive after stopping injections", "Irregular or absent ovulation", "Hormonal imbalances", "Prolonged absence of menstruation", "Elevated FSH or LH levels", "Reduced ovarian reserve", "Emotional distress from infertility", "Need for fertility treatment"],
  },
  {
    slug: "stroke",
    name: "Stroke Risk",
    medicalTerm: "Cerebrovascular Accident / Ischemic Stroke",
    description: "Some studies have raised concerns about an elevated stroke risk among Depo-Provera users, particularly those with additional risk factors such as hypertension, smoking, or migraine with aura. If you experienced a stroke while using or shortly after using Depo-Provera, you may have a claim.",
    symptoms: ["Sudden numbness or weakness on one side", "Confusion or trouble speaking", "Vision disturbances", "Severe sudden headache", "Loss of balance or coordination", "Difficulty walking", "Facial drooping", "Arm weakness"],
  },
];

export const resources: ResourcePage[] = [
  {
    slug: "what-is-depo-provera",
    title: "What Is Depo-Provera?",
    description: "A comprehensive guide to understanding Depo-Provera, how it works, and why it has become the subject of major litigation.",
    content: `Depo-Provera is a brand name for medroxyprogesterone acetate (DMPA), a synthetic progestin delivered via intramuscular injection every 12 weeks. It was approved by the FDA as a contraceptive in 1992 and has since been used by millions of women in the United States and around the world.\n\nHow Depo-Provera Works\n\nDepo-Provera prevents pregnancy primarily by suppressing ovulation. The synthetic hormone medroxyprogesterone acetate mimics the effects of progesterone, a naturally occurring hormone in the female body. At higher doses, it also thickens cervical mucus, making it harder for sperm to reach the egg, and alters the uterine lining to prevent implantation.\n\nThe injection is typically administered in the arm or buttocks by a healthcare provider. Because it releases a high dose of hormone all at once, Depo-Provera is highly effective at preventing pregnancy — with a failure rate of less than 1% when administered correctly.\n\nWhy It's Now the Subject of Major Lawsuits\n\nWhat manufacturers failed to adequately warn patients about were the serious long-term health consequences of repeated exposure to synthetic progestins at high doses. Research published in the British Medical Journal and other peer-reviewed publications established a statistically significant link between long-term Depo-Provera use and the development of meningiomas — tumors that grow on the membranes surrounding the brain and spinal cord.\n\nBeyond meningiomas, Depo-Provera has been associated with significant bone mineral density loss (prompting an FDA black box warning), delayed return to fertility, mood disorders including depression, and other serious conditions.\n\nPlaintiffs in current litigation allege that Pfizer — Depo-Provera's manufacturer — knew or should have known about these risks and failed to adequately warn healthcare providers and patients. Thousands of women are now coming forward to hold the company accountable.`,
  },
  {
    slug: "depo-provera-side-effects",
    title: "Depo-Provera Side Effects",
    description: "Learn about the known and alleged side effects of Depo-Provera, from common nuisances to serious life-altering conditions.",
    content: `Depo-Provera carries a range of side effects — some relatively minor and temporary, others serious and potentially permanent. Here is a comprehensive overview of what the research and patient reports have documented.\n\nCommon Side Effects\n\nThe most frequently reported side effects include irregular bleeding patterns (which may include prolonged bleeding, spotting, or the complete absence of periods), weight gain, headaches, mood changes, decreased libido, and injection-site discomfort. Many of these effects are acknowledged in the product's official labeling.\n\nSerious and Potentially Life-Altering Side Effects\n\nThe more serious concerns have emerged from long-term use and independent research. Brain Meningiomas: Research published in the British Medical Journal found that women who used Depo-Provera for more than one year had a significantly elevated risk of developing intracranial meningiomas. These tumors, though often classified as benign, can cause seizures, vision loss, cognitive decline, and may require brain surgery.\n\nBone Density Loss: The FDA issued a black box warning specifically about Depo-Provera's effect on bone mineral density. Long-term use can lead to osteoporosis, especially concerning in younger women. Some research suggests the bone loss does not fully reverse after stopping injections.\n\nDelayed Return to Fertility: Many women experience a delay of 12 to 18 months or more before normal fertility resumes after stopping Depo-Provera. Some women have reported permanent fertility issues.\n\nDepression and Mood Disorders: The hormonal disruption caused by medroxyprogesterone acetate can significantly impact mental health, leading to clinical depression, anxiety, and in some reported cases, suicidal ideation.\n\nWhat to Do If You're Experiencing Side Effects\n\nIf you've used Depo-Provera and are experiencing any of these symptoms — particularly if you've received a meningioma diagnosis — document everything. Keep records of your injection history, all medical appointments, symptoms, and any diagnoses. Then connect with our team to explore your legal options.`,
  },
  {
    slug: "how-to-file-a-claim",
    title: "How to File a Depo-Provera Claim",
    description: "A step-by-step guide to starting your Depo-Provera lawsuit, from gathering evidence to working with an attorney.",
    content: `Filing a Depo-Provera claim can feel overwhelming when you're already dealing with a serious medical diagnosis. Our job is to make the process as straightforward and stress-free as possible. Here's how it works.\n\nStep 1: Document Your Depo-Provera History\n\nStart by gathering any records that confirm your use of Depo-Provera. This may include pharmacy records, OB-GYN or clinic records showing injection dates, insurance claims, and any paperwork from the healthcare provider who administered the shots. The more documentation you have, the stronger your case.\n\nStep 2: Gather Your Medical Records\n\nIf you've been diagnosed with a meningioma or another condition potentially linked to Depo-Provera, obtain copies of all relevant medical records — including radiology reports, MRI results, surgical reports, pathology findings, and specialist notes. These records form the foundation of your legal claim.\n\nStep 3: Submit a Free Case Evaluation\n\nContact our team to submit a free, no-obligation case evaluation. We'll review your history, your diagnosis, and your circumstances to determine whether you have a viable claim. This process is completely confidential, and there is no cost to you for this initial consultation.\n\nStep 4: Get Connected with an Attorney\n\nIf your case shows merit, we connect you with an experienced pharmaceutical attorney in our network who handles Depo-Provera cases on a contingency basis — meaning you pay nothing unless and until you recover compensation.\n\nStep 5: Your Attorney Takes Over\n\nFrom there, your attorney handles everything: investigating your case, filing the lawsuit, managing the discovery process, negotiating with defendants, and if necessary, representing you at trial. You focus on your health. They fight for your compensation.`,
  },
  {
    slug: "statute-of-limitations",
    title: "Statute of Limitations for Depo-Provera Claims",
    description: "Understand how filing deadlines work for Depo-Provera lawsuits and why acting quickly is essential.",
    content: `The statute of limitations is the legal deadline by which you must file your claim. Missing this deadline — even by a single day — can permanently bar you from recovering compensation, regardless of how strong your case is. Understanding how these deadlines work is critical.\n\nThe Discovery Rule\n\nMost states apply what's called the discovery rule for pharmaceutical injury cases. Under this rule, the clock doesn't start running from the date you received Depo-Provera injections — it starts from the date you discovered (or reasonably should have discovered) that your injury was linked to Depo-Provera.\n\nFor many meningioma patients, this means the clock may have started when they received their diagnosis and a healthcare provider or attorney informed them of the potential connection to Depo-Provera — not years earlier when they received their last injection.\n\nHow Long Do You Have?\n\nDeadlines vary by state, ranging from as little as 1 year (Kentucky, Louisiana, Tennessee) to as many as 6 years (Maine, North Dakota, South Dakota). Most states give victims between 2 and 3 years from the date of discovery.\n\nWhy You Should Not Wait\n\nEven if your state gives you several years, there are compelling reasons to act as soon as possible. Evidence is preserved better and more completely early in a case. Witnesses' memories are more reliable. Medical records are more accessible. And attorneys who specialize in Depo-Provera litigation may have bandwidth now that could become limited as more cases are filed.\n\nThe safest approach: if you've used Depo-Provera and received any diagnosis that might be linked — contact us today for a free case evaluation while your options are still open.`,
  },
  {
    slug: "compensation-calculator",
    title: "What Compensation Can I Recover?",
    description: "Understand the types of compensation available to Depo-Provera victims in a successful lawsuit.",
    content: `If you were harmed by Depo-Provera, you may be entitled to substantial financial compensation. The exact amount depends on the severity of your injuries, the impact on your life, and the specific facts of your case. Here is a breakdown of the major categories of damages that may be available to you.\n\nMedical Expenses\n\nYou may recover compensation for all medical costs related to your Depo-Provera injury — past and future. This includes diagnostic imaging (MRIs, CT scans), neurosurgeon consultations, brain surgery, radiation therapy, physical therapy, rehabilitation, ongoing monitoring, and any future treatment needs. For meningioma patients, these costs can be substantial.\n\nLost Wages and Earning Capacity\n\nIf your injury caused you to miss work — or permanently reduced your ability to work — you may recover damages for lost income. This includes wages already lost and future earning capacity if your condition is ongoing or permanent.\n\nPain and Suffering\n\nThis category of damages compensates you for the physical pain, emotional distress, and diminished quality of life caused by your injury. A brain tumor diagnosis, the fear and uncertainty it brings, the impact of surgery and recovery — these experiences have real monetary value in a legal claim.\n\nLoss of Consortium\n\nIf your injury significantly affected your relationship with your spouse or partner — including loss of companionship, intimacy, and support — your partner may also have a claim for loss of consortium damages.\n\nPunitive Damages\n\nIn cases where the manufacturer's conduct is found to be particularly egregious — such as knowingly concealing safety information — courts may award punitive damages designed to punish the wrongdoer and deter future misconduct. These can significantly increase the total award.`,
  },
  {
    slug: "fda-warnings",
    title: "FDA Warnings About Depo-Provera",
    description: "A review of the official FDA warnings and safety communications related to Depo-Provera and medroxyprogesterone acetate.",
    content: `The U.S. Food and Drug Administration has issued several important warnings and safety communications regarding Depo-Provera over the years. These official communications are significant in litigation because they reflect what the manufacturer knew — or was required to disclose — at various points in time.\n\nThe Black Box Warning on Bone Density Loss\n\nIn 2004, the FDA required Pfizer to add a black box warning to Depo-Provera's labeling — the most serious warning the agency can require. The warning explicitly states that Depo-Provera causes significant bone mineral density (BMD) loss and that this loss is greater the longer the drug is used. The FDA recommended that Depo-Provera not be used as a long-term birth control method (more than two years) unless other options are inadequate.\n\nMeningioma Research and Regulatory Response\n\nPeer-reviewed research, particularly a landmark study published in the British Medical Journal in 2022, established a statistically significant link between long-term Depo-Provera use and meningioma development. The French regulatory agency ANSM took action in 2021, warning healthcare providers about the meningioma risk. The FDA has been slower to respond, but ongoing litigation may accelerate regulatory action.\n\nWhat These Warnings Mean for Your Case\n\nFDA warnings and regulatory actions are powerful evidence in pharmaceutical liability cases. They establish that the manufacturer was on notice — or should have been — about specific risks, and that those risks were serious enough to require disclosure. When a manufacturer fails to adequately communicate known risks to patients and providers, injured consumers have the right to seek compensation.`,
  },
  {
    slug: "pfizer-lawsuit-history",
    title: "Pfizer and Depo-Provera Lawsuits",
    description: "The history of Depo-Provera litigation against Pfizer and where the lawsuits stand today.",
    content: `Depo-Provera is manufactured and marketed by Pfizer, one of the world's largest pharmaceutical companies. The current wave of Depo-Provera meningioma litigation represents one of the most significant pharmaceutical mass torts in recent years.\n\nBackground on the Litigation\n\nLawsuits began accelerating after the 2022 publication of a British Medical Journal study that found a more than five-fold increased risk of meningioma in women who used Depo-Provera for more than a year. This study followed earlier French research that prompted European regulatory action.\n\nPlaintiffs allege that Pfizer knew about the meningioma risk well before adequate warnings were provided — and that women who would have chosen a different contraceptive method, or discontinued Depo-Provera sooner, were denied the opportunity to make informed decisions about their health.\n\nFederal Multidistrict Litigation (MDL)\n\nAs individual Depo-Provera lawsuits were filed across the country, courts consolidated them into a federal multidistrict litigation (MDL) to streamline pretrial proceedings. MDLs are common in pharmaceutical mass torts — they allow cases sharing common facts to be managed more efficiently, while each plaintiff's individual case retains its separate identity.\n\nWhere Things Stand Today\n\nThe litigation is active and ongoing. Early bellwether trials — test cases used to gauge how juries respond to the evidence — will help shape settlement negotiations. Attorneys experienced in pharmaceutical mass torts are actively accepting new Depo-Provera meningioma cases. The sooner you begin the process, the better positioned you'll be.`,
  },
  {
    slug: "depo-provera-recall",
    title: "Depo-Provera Recall Information",
    description: "What you need to know about Depo-Provera recalls, FDA actions, and how they affect your legal rights.",
    content: `Has Depo-Provera Been Recalled?\n\nAs of now, Depo-Provera has not been subject to a full market-wide recall by the FDA. However, this does not mean the drug is safe, and it does not affect your ability to bring a legal claim. Pharmaceutical companies face liability for products that remain on the market — the absence of a recall simply means regulators have not yet acted to remove the product, not that the product is free of serious risks.\n\nLimited Recalls and Manufacturing Issues\n\nThere have been specific, limited recalls of Depo-Provera products related to manufacturing issues — such as concerns about sterility or labeling. These targeted recalls do not encompass the broader safety issues related to meningioma risk.\n\nRecalls in Other Countries\n\nSome countries have taken more aggressive regulatory action than the United States regarding Depo-Provera's safety profile, particularly regarding meningioma risk. France's ANSM issued a safety alert and restricted prescribing in 2021. These international regulatory actions can be used as evidence in U.S. litigation to show awareness of the risk.\n\nYou Don't Need a Recall to Have a Claim\n\nMany successful pharmaceutical lawsuits involve products that were never recalled — including products still on the market today. What matters is whether the manufacturer knew or should have known about serious risks, whether those risks were adequately disclosed, and whether you were harmed as a result. If you used Depo-Provera and developed a meningioma or other serious condition, your claim is valid regardless of recall status.`,
  },
];

export const info: InfoPage[] = [
  {
    slug: "do-i-qualify",
    title: "Do I Qualify for a Depo-Provera Lawsuit?",
    description: "Find out if you may be eligible to file a claim for injuries caused by Depo-Provera injections.",
    content: `Determining whether you qualify for a Depo-Provera lawsuit depends on several factors. While every case is unique and only an attorney can give you a definitive assessment, here are the key criteria that typically indicate a strong potential claim.\n\nYou Used Depo-Provera\n\nThe most basic requirement is that you received Depo-Provera (medroxyprogesterone acetate) injections. Duration of use matters — claims are typically strongest for women who used the injection for one year or more, as the research linking Depo-Provera to meningiomas is most robust for longer-term users.\n\nYou Have a Qualifying Diagnosis\n\nThe most common qualifying condition is a meningioma — a tumor arising from the membranes surrounding the brain or spinal cord. Other qualifying conditions may include intracranial tumors, significant bone density loss leading to fractures, or other serious conditions linked to Depo-Provera. The diagnosis should be documented by a qualified medical professional.\n\nThe Injury Is Linked to Your Depo-Provera Use\n\nYour attorneys will work to establish causation — the connection between your Depo-Provera use and your diagnosis. Medical records, expert witnesses, and scientific research all play a role in building this connection.\n\nYou Are Within the Filing Deadline\n\nYour state's statute of limitations must not have expired. Filing deadlines vary by state, and the discovery rule may extend your deadline if you only recently learned of the connection between your condition and Depo-Provera. Don't assume it's too late — contact us and we'll help assess your timeline.\n\nIf you check these boxes — or even if you're unsure — submit a free case evaluation. There's no cost, no obligation, and no risk in finding out where you stand.`,
  },
  {
    slug: "no-win-no-fee",
    title: "No Win No Fee: How Contingency Fees Work",
    description: "Understand how contingency fee arrangements work and why you pay nothing unless you recover compensation.",
    content: `One of the most common concerns people have about pursuing a lawsuit is the cost. Legal proceedings can be expensive, and many people who have been harmed by Depo-Provera are already dealing with significant medical bills and financial stress. The good news: pharmaceutical injury lawyers almost universally work on a contingency fee basis.\n\nWhat Is a Contingency Fee?\n\nA contingency fee means your attorney only gets paid if you win — either through a settlement or a court judgment. If you don't recover anything, you owe nothing for your attorney's legal fees. This arrangement levels the playing field between individual injury victims and large pharmaceutical corporations with massive legal budgets.\n\nWhat Percentage Do Attorneys Take?\n\nContingency fees in mass tort pharmaceutical cases typically range from 33% to 40% of the total recovery, depending on the stage at which the case resolves. The exact percentage is agreed upon upfront and disclosed clearly in your representation agreement. Out-of-pocket expenses (court filing fees, expert witness costs, etc.) may also be deducted from the recovery, and your attorney should explain these clearly before you sign anything.\n\nWhat This Means for You\n\nYou can pursue justice — regardless of your current financial situation. You don't need savings. You don't need to pay anything upfront. The attorney takes on the financial risk of litigating your case, and they are motivated to achieve the best possible outcome because their compensation depends on it.\n\nOur role is to connect you with attorneys who offer these arrangements. The attorneys in our network handle Depo-Provera cases on a fully contingency basis — so you can focus on your health while they fight for your recovery.`,
  },
  {
    slug: "class-action-vs-individual",
    title: "Class Action vs. Individual Lawsuit: What's the Difference?",
    description: "Understand the difference between class action lawsuits and individual claims, and which may be better for Depo-Provera victims.",
    content: `When multiple people are harmed by the same product, they often have a choice between joining a class action lawsuit or filing an individual claim. For Depo-Provera victims, understanding this distinction can have a significant impact on how much compensation you ultimately receive.\n\nWhat Is a Class Action?\n\nA class action is a lawsuit where a large group of people with similar claims sue together as a single class. One or a few named plaintiffs represent the entire group. If the case settles or results in a judgment, the recovery is divided among all class members — which can result in relatively small individual payouts.\n\nWhat Is an Individual Lawsuit?\n\nAn individual lawsuit (or mass tort claim when consolidated with similar cases) allows each plaintiff to pursue their own compensation based on their specific injuries, circumstances, and damages. Unlike a class action, your case is evaluated on its own merits — meaning someone with severe injuries from Depo-Provera can recover significantly more than someone with minimal harm.\n\nWhich Is Better for Depo-Provera Victims?\n\nMost Depo-Provera victims are better served by individual claims than by class action participation. Each victim's injuries are unique — a woman who underwent brain surgery for a meningioma has vastly different damages than someone who experienced bone density loss. Individual claims capture this variation and typically result in higher recoveries for those with serious injuries.\n\nThe current Depo-Provera litigation is structured as a multidistrict litigation (MDL) — not a class action. This means cases are grouped for efficiency during pretrial proceedings, but each plaintiff's case remains individual and is resolved based on their specific facts.`,
  },
  {
    slug: "depo-provera-vs-other-contraceptives",
    title: "Depo-Provera vs. Other Contraceptives",
    description: "How Depo-Provera's safety profile compares to other birth control options and why women deserve accurate information.",
    content: `Women choosing contraception deserve accurate, complete information about the risks and benefits of every option. For too long, Depo-Provera's serious risks were downplayed or not communicated at all — leaving women unable to make truly informed decisions. Here's how Depo-Provera compares to other commonly used contraceptives.\n\nHormonal Comparison\n\nUnlike combined oral contraceptives that use both estrogen and progestin, Depo-Provera contains only medroxyprogesterone acetate (a synthetic progestin) at relatively high doses. Some research suggests that synthetic progestins — particularly at high doses — may have greater effects on tumor growth and bone density than lower-dose or estrogen-containing alternatives.\n\nMeningioma Risk\n\nThe elevated meningioma risk associated with Depo-Provera has not been observed at the same levels with other progestin-only methods (such as levonorgestrel IUDs) or with combination oral contraceptives. This specificity — the risk appearing to be concentrated in DMPA/Depo-Provera users — strengthens the scientific argument that the drug itself is the causative factor.\n\nBone Density Consideration\n\nThe FDA's black box warning on bone density loss is specific to Depo-Provera and reflects a concern not shared to the same degree by other hormonal contraceptives. Other long-acting reversible contraceptives (LARCs) like IUDs and implants do not carry this specific warning.\n\nWhat This Means for Your Case\n\nIf you would have chosen a different contraceptive — or discontinued Depo-Provera sooner — had you been fully informed of the meningioma and bone density risks, you have the foundation of a failure-to-warn legal claim. Women deserve the right to make informed choices about their health.`,
  },
  {
    slug: "meningioma-diagnosis",
    title: "What to Do After a Meningioma Diagnosis",
    description: "Practical steps for managing your health and protecting your legal rights after a Depo-Provera-related meningioma diagnosis.",
    content: `Receiving a meningioma diagnosis is frightening. Whether your tumor was discovered incidentally or you sought care because of symptoms, you're likely facing a mix of fear, confusion, and unanswered questions. Here's how to move forward — both for your health and your legal rights.\n\nStep 1: Seek Specialized Medical Care\n\nNot all meningiomas require immediate surgery. Many are managed with watchful waiting and regular MRI monitoring, especially if they are small and asymptomatic. However, you should be seen by a neurosurgeon experienced with brain tumors. Get a second opinion if possible. Your treatment plan should be guided by tumor size, location, growth rate, and your symptoms.\n\nStep 2: Document Everything\n\nKeep a detailed record of every medical appointment, every symptom you experience, every treatment you receive, and every cost — including medications, travel to appointments, and time lost from work. This documentation is essential for your legal claim.\n\nStep 3: Gather Your Depo-Provera Records\n\nLocate any records confirming your Depo-Provera use — pharmacy records, clinic visit notes, insurance claims, or any other documentation showing when you received injections and for how long. The link between your use and your diagnosis is a central element of your legal claim.\n\nStep 4: Contact Us for a Free Case Evaluation\n\nOnce you've stabilized your immediate medical situation, connect with our team to evaluate your legal options. There is no cost and no obligation. We'll review your history, explain the process, and if your case is viable, connect you with an experienced pharmaceutical attorney who works on contingency.\n\nStep 5: Take Care of Yourself\n\nYou've been through something serious. Lean on your support system, communicate openly with your care team, and know that there are people fighting to make sure you're not alone in this.`,
  },
  {
    slug: "finding-the-right-attorney",
    title: "How to Find the Right Attorney for Your Depo-Provera Claim",
    description: "What to look for when choosing an attorney to handle your Depo-Provera lawsuit.",
    content: `Choosing the right attorney to handle your Depo-Provera claim is one of the most important decisions you'll make in this process. Not all attorneys are equally equipped to handle pharmaceutical mass tort litigation. Here's what to look for.\n\nPharmaceutical Mass Tort Experience\n\nDepo-Provera litigation requires attorneys who understand pharmaceutical liability law, FDA regulations, scientific and medical evidence, expert witness management, and MDL procedures. Look for attorneys with a track record in drug and medical device litigation — not just general personal injury work.\n\nResources to Litigate Against a Major Corporation\n\nPfizer is one of the largest corporations in the world, with unlimited resources to defend itself. Your attorney needs to have the financial resources to retain expert witnesses, conduct discovery, and take the case to trial if necessary. Underfunded law firms may be forced into unfavorable early settlements.\n\nContingency Fee Arrangement\n\nPharmaceutical attorneys should work on contingency — meaning you pay nothing unless you win. Be wary of any attorney who asks for upfront fees in a case like this.\n\nClear Communication\n\nYour attorney should be easy to reach, should explain developments in plain language, and should keep you informed at every stage. You deserve to understand what is happening in your case.\n\nHow We Help\n\nOur case acquisition team connects injured Depo-Provera victims with pre-screened attorneys who meet these standards. We do the vetting for you — so you can focus on your health while we ensure you're in capable hands.`,
  },
  {
    slug: "medical-records",
    title: "Getting Your Medical Records for a Depo-Provera Claim",
    description: "A practical guide to requesting and organizing medical records to support your Depo-Provera lawsuit.",
    content: `Your medical records are the evidentiary backbone of your Depo-Provera claim. Gathering complete and accurate records early in the process protects your case and helps attorneys evaluate your claim efficiently. Here's how to approach this.\n\nWhat Records You Need\n\nFor a Depo-Provera meningioma claim, you'll typically need: records from every healthcare provider who administered Depo-Provera injections; pharmacy records showing your injection history; MRI and CT imaging reports and the actual images (on disc if possible); neurosurgery, neurology, and oncology records; pathology reports if you had a biopsy or surgery; and any records documenting symptoms, emergency visits, or hospitalizations related to your diagnosis.\n\nHow to Request Your Records\n\nUnder HIPAA, you have the legal right to access your medical records. Submit a written request to each healthcare provider's medical records department. Include your full name, date of birth, dates of service (or a date range), and a description of the records you need. Most providers charge a per-page fee for copies, though some states limit these fees.\n\nPharmacy Records\n\nYour pharmacy can provide a complete history of all prescriptions filled, which may document Depo-Provera injections administered or billed through your insurance. You can request this directly from the pharmacy or through your insurance company's claim history portal.\n\nOrganizing Your Records\n\nOnce you have your records, organize them chronologically and by provider. Keep digital copies in a secure location (cloud backup recommended) and maintain physical copies as well. Provide a complete set to any attorney who reviews your case.\n\nWe Can Help\n\nWhen you submit a case evaluation through our team, we'll guide you through the records-gathering process and connect you with legal professionals who can help ensure nothing critical is missed.`,
  },
];
