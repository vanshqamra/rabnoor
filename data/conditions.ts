export interface Condition {
  slug: string;
  name: string;
  summary: string;
  symptoms: string[];
  whenToSeeDoctor: string;
  treatments: string[];
  seoDescription: string;
}

export const conditions: Condition[] = [
  {
    slug: 'gastroesophageal-reflux-disease',
    name: 'Gastroesophageal Reflux Disease (GERD)',
    summary: 'Chronic acid reflux causing heartburn, regurgitation, and chest discomfort.',
    symptoms: ['Heartburn', 'Regurgitation', 'Chest discomfort', 'Chronic cough'],
    whenToSeeDoctor:
      'Persistent reflux symptoms lasting longer than two weeks, nighttime symptoms, difficulty swallowing, or weight loss.',
    treatments: ['Lifestyle modifications', 'Medication (PPIs, H2 blockers)', 'Endoscopic evaluation', 'pH monitoring'],
    seoDescription:
      'Diagnosis and treatment for GERD in Thessaloniki including endoscopy and personalized reflux management plans.',
  },
  {
    slug: 'peptic-ulcer-disease',
    name: 'Peptic Ulcer Disease',
    summary: 'Sores in the stomach or duodenal lining often due to infection or medication.',
    symptoms: ['Burning stomach pain', 'Bloating', 'Nausea', 'Vomiting'],
    whenToSeeDoctor:
      'Persistent stomach pain, anemia, vomiting blood, or black stools require urgent assessment.',
    treatments: ['Endoscopy', 'Helicobacter pylori eradication therapy', 'Medication review', 'Dietary guidance'],
    seoDescription:
      'Peptic ulcer evaluation and treatment with endoscopy, H. pylori therapy, and personalized care in Thessaloniki.',
  },
  {
    slug: 'helicobacter-pylori-infection',
    name: 'Helicobacter pylori Infection',
    summary: 'Bacterial infection that can cause gastritis, ulcers, and increase cancer risk.',
    symptoms: ['Indigestion', 'Abdominal discomfort', 'Bloating', 'Nausea'],
    whenToSeeDoctor:
      'If you have chronic indigestion, a family history of ulcers, or require testing after ulcer treatment.',
    treatments: ['Breath test', 'Stool antigen test', 'Targeted antibiotic therapy', 'Follow-up testing'],
    seoDescription:
      'Testing and eradication therapy for Helicobacter pylori infection with tailored follow-up in Thessaloniki.',
  },
  {
    slug: 'irritable-bowel-syndrome',
    name: 'Irritable Bowel Syndrome (IBS)',
    summary: 'Functional bowel disorder causing abdominal pain with altered bowel habits.',
    symptoms: ['Abdominal cramping', 'Bloating', 'Constipation', 'Diarrhea'],
    whenToSeeDoctor:
      'Persistent or disruptive symptoms, red-flag signs such as bleeding, weight loss, or anemia.',
    treatments: ['Dietary counseling (low FODMAP)', 'Targeted medications', 'Stress management', 'Gut microbiome evaluation'],
    seoDescription:
      'Comprehensive IBS management in Thessaloniki focusing on diet, medication, and holistic symptom control.',
  },
  {
    slug: 'inflammatory-bowel-disease',
    name: 'Inflammatory Bowel Disease (Crohn’s disease, Ulcerative colitis)',
    summary: 'Chronic inflammatory conditions affecting the gastrointestinal tract.',
    symptoms: ['Abdominal pain', 'Diarrhea', 'Rectal bleeding', 'Fatigue'],
    whenToSeeDoctor:
      'Symptoms lasting longer than a few weeks, weight loss, or blood in stools require specialist care.',
    treatments: ['Advanced imaging and endoscopy', 'Immunomodulatory therapy', 'Biologic treatments', 'Nutritional support'],
    seoDescription:
      'IBD diagnosis and management in Thessaloniki including biologic therapies and multidisciplinary care.',
  },
  {
    slug: 'liver-diseases',
    name: 'Liver Diseases (Hepatitis B/C, Fatty Liver, Cirrhosis)',
    summary: 'Comprehensive evaluation of viral, metabolic, and chronic liver disorders.',
    symptoms: ['Fatigue', 'Jaundice', 'Abdominal swelling', 'Abnormal liver tests'],
    whenToSeeDoctor:
      'Abnormal liver function tests, risk factors such as viral hepatitis, alcohol or metabolic syndrome.',
    treatments: ['FibroScan and ultrasound monitoring', 'Antiviral therapy', 'Metabolic and lifestyle programs', 'Cirrhosis surveillance'],
    seoDescription:
      'Liver disease assessment and treatment in Thessaloniki, including hepatitis management and cirrhosis care.',
  },
  {
    slug: 'pancreatitis',
    name: 'Pancreatitis',
    summary: 'Inflammation of the pancreas causing abdominal pain and digestive issues.',
    symptoms: ['Severe upper abdominal pain', 'Nausea and vomiting', 'Fever', 'Jaundice'],
    whenToSeeDoctor: 'Severe abdominal pain or symptoms following gallstones, alcohol use, or high triglycerides.',
    treatments: ['Hospital coordination', 'Endoscopic ultrasound', 'ERCP for biliary causes', 'Nutritional support'],
    seoDescription:
      'Diagnosis and management of acute and chronic pancreatitis with advanced endoscopic therapy in Thessaloniki.',
  },
  {
    slug: 'gallbladder-and-biliary-diseases',
    name: 'Gallbladder & Biliary Tract Diseases',
    summary: 'Conditions affecting the gallbladder and bile ducts, including stones and inflammation.',
    symptoms: ['Right upper abdominal pain', 'Nausea', 'Jaundice', 'Fever'],
    whenToSeeDoctor:
      'Episodes of biliary colic, jaundice, or abnormal liver tests need prompt evaluation.',
    treatments: ['Ultrasound assessment', 'ERCP when indicated', 'Surgical coordination', 'Post-operative follow-up'],
    seoDescription:
      'Comprehensive care for gallbladder and biliary diseases with imaging and therapeutic endoscopy in Thessaloniki.',
  },
  {
    slug: 'celiac-disease',
    name: 'Celiac Disease',
    summary: 'Autoimmune reaction to gluten causing intestinal inflammation and nutrient deficiencies.',
    symptoms: ['Chronic diarrhea', 'Weight loss', 'Bloating', 'Anemia'],
    whenToSeeDoctor: 'Persistent digestive symptoms, family history of celiac disease, or unexplained anemia.',
    treatments: ['Serologic testing', 'Duodenal biopsy via endoscopy', 'Gluten-free diet counseling', 'Nutritional monitoring'],
    seoDescription:
      'Celiac disease testing and long-term management with dietary support in Thessaloniki.',
  },
  {
    slug: 'gastrointestinal-bleeding',
    name: 'Gastrointestinal Bleeding',
    summary: 'Bleeding anywhere along the digestive tract requiring urgent assessment.',
    symptoms: ['Vomiting blood', 'Black or tarry stools', 'Bright red rectal bleeding', 'Weakness'],
    whenToSeeDoctor: 'Any sign of GI bleeding requires immediate medical attention.',
    treatments: ['Emergency endoscopy', 'Hemostasis techniques', 'Medication review', 'Surveillance planning'],
    seoDescription:
      'Emergency and elective management of gastrointestinal bleeding with advanced endoscopic therapy in Thessaloniki.',
  },
  {
    slug: 'screening-colonoscopy',
    name: 'Screening Colonoscopy & Colon Polyps',
    summary: 'Preventive colonoscopy to detect and remove precancerous polyps.',
    symptoms: ['Often asymptomatic', 'Occult bleeding', 'Change in bowel habits'],
    whenToSeeDoctor:
      'Adults aged 50 and above, or earlier with family history, inflammatory bowel disease, or symptoms.',
    treatments: ['Screening colonoscopy', 'Polyp removal', 'Histology review', 'Personalized surveillance intervals'],
    seoDescription:
      'Screening colonoscopy services in Thessaloniki with emphasis on prevention and early detection of colon cancer.',
  },
];

export const getConditionBySlug = (slug: string) => conditions.find((condition) => condition.slug === slug);
