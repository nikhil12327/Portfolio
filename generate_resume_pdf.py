import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=0.45 * inch,
        leftMargin=0.45 * inch,
        topMargin=0.45 * inch,
        bottomMargin=0.45 * inch
    )

    styles = getSampleStyleSheet()

    # Custom styles
    header_name_style = ParagraphStyle(
        'HeaderName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#0f172a')
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#334155')
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=7,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'ResumeBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#1e293b')
    )

    bullet_style = ParagraphStyle(
        'ResumeBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=12,
        textColor=colors.HexColor('#1e293b'),
        leftIndent=12,
        firstLineIndent=-8
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.2,
        leading=13,
        textColor=colors.HexColor('#0f172a')
    )

    job_subtitle_style = ParagraphStyle(
        'JobSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.8,
        leading=12,
        textColor=colors.HexColor('#475569')
    )

    job_date_style = ParagraphStyle(
        'JobDate',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=13,
        alignment=TA_RIGHT,
        textColor=colors.HexColor('#475569')
    )

    elements = []

    # Name & Contact
    elements.append(Paragraph("Nikhil Bonigala", header_name_style))
    elements.append(Spacer(1, 3))
    elements.append(Paragraph(
        "+91-9100372514 &nbsp;|&nbsp; bonigalanikhil2@gmail.com &nbsp;|&nbsp; "
        "<a href='https://www.linkedin.com/in/nikhil-bonigala' color='#2563eb'>LinkedIn</a> &nbsp;|&nbsp; "
        "<a href='https://github.com/nikhil12327' color='#2563eb'>GitHub</a> &nbsp;|&nbsp; "
        "<a href='https://leetcode.com' color='#2563eb'>LeetCode</a>",
        contact_style
    ))
    elements.append(Spacer(1, 6))

    def add_section(title):
        elements.append(Paragraph(title.upper(), section_heading_style))
        elements.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#0f172a'), spaceBefore=1, spaceAfter=4))

    # Summary
    add_section("Summary")
    elements.append(Paragraph(
        "Computer Science and Engineering undergraduate at the National Institute of Technology, Goa with hands-on "
        "experience in full-stack development, machine learning, deep learning, and computer vision. Built a real-time bike taxi booking "
        "platform using React.js, Vite, Firebase, and Firestore, with strong foundations in DSA, OOP, DBMS, and problem solving.",
        body_style
    ))
    elements.append(Spacer(1, 4))

    # Technical Skills
    add_section("Technical Skills")
    skills_data = [
        [Paragraph("<b>Programming Languages:</b>", body_style), Paragraph("C, C++, Python, Java", body_style)],
        [Paragraph("<b>Web Development:</b>", body_style), Paragraph("React.js, Vite, Tailwind CSS", body_style)],
        [Paragraph("<b>Cloud / Database:</b>", body_style), Paragraph("Firebase Authentication, Firestore, Firebase Hosting, MySQL", body_style)],
        [Paragraph("<b>AI / ML:</b>", body_style), Paragraph("Pandas, NumPy, Scikit-learn, TensorFlow/Keras, OpenCV, Machine Learning", body_style)],
    ]
    t = Table(skills_data, colWidths=[1.6 * inch, 5.7 * inch])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 4))

    # Projects
    add_section("Projects")
    
    # Project 1
    p1_header = [
        [Paragraph("<b>Image Classification Using Deep Learning</b>", job_title_style), Paragraph("Aug 2024 - Oct 2024", job_date_style)]
    ]
    t1 = Table(p1_header, colWidths=[5.5 * inch, 1.8 * inch])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(t1)
    elements.append(Paragraph("Deep Learning / Computer Vision", job_subtitle_style))
    elements.append(Paragraph("• Developed a multi-class image classification model using image preprocessing and Convolutional Neural Networks (CNNs).", bullet_style))
    elements.append(Paragraph("• Implemented an end-to-end workflow for data preprocessing, model training, model evaluation, and image prediction.", bullet_style))
    elements.append(Paragraph("• <b>Technologies:</b> Python, TensorFlow/Keras, OpenCV, NumPy, CNN.", bullet_style))
    elements.append(Spacer(1, 4))

    # Project 2
    p2_header = [
        [Paragraph("<b>Intelligent Stock Market Prediction &amp; Trading Analysis System</b>", job_title_style), Paragraph("Jan 2025 - Apr 2025", job_date_style)]
    ]
    t2 = Table(p2_header, colWidths=[5.5 * inch, 1.8 * inch])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(t2)
    elements.append(Paragraph("Machine Learning / Financial Data Analysis", job_subtitle_style))
    elements.append(Paragraph("• Developed a machine learning-based stock market prediction system that analyzes historical market data and generates BUY/SELL signals using technical indicators.", bullet_style))
    elements.append(Paragraph("• Designed an end-to-end trading analysis pipeline with automated Profit and Loss analysis, performance evaluation, and Equity Curve visualization.", bullet_style))
    elements.append(Paragraph("• Evaluated trading performance using Sharpe Ratio, Win Rate, Profit Factor, and Maximum Drawdown.", bullet_style))
    elements.append(Paragraph("• <b>Technologies:</b> Python, Pandas, NumPy, Scikit-learn, Matplotlib.", bullet_style))
    elements.append(Spacer(1, 4))

    # Experience
    add_section("Experience")
    exp_header = [
        [Paragraph("<b>Voat Network - RIDEX Bike Taxi Booking Platform</b>", job_title_style), Paragraph("June 2026", job_date_style)]
    ]
    te = Table(exp_header, colWidths=[5.5 * inch, 1.8 * inch])
    te.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(te)
    elements.append(Paragraph("Full Stack Developer Intern", job_subtitle_style))
    elements.append(Paragraph("• Developed a full-stack bike taxi booking platform with Customer, Rider, and Admin web applications using React.js, Vite, Firebase Authentication, Firestore, and Tailwind CSS.", bullet_style))
    elements.append(Paragraph("• Implemented real-time ride lifecycle management including ride booking, rider assignment, live ride status updates, wallet payments, rider approval workflow, and Firebase Hosting deployment.", bullet_style))
    elements.append(Paragraph("• Built an Admin Dashboard for live ride monitoring, customer and rider management, revenue analytics, KPI tracking, activity timeline, and search functionality.", bullet_style))
    elements.append(Spacer(1, 4))

    # Education
    add_section("Education")
    edu_data = [
        [Paragraph("<b>National Institute of Technology, Goa</b>", job_title_style), Paragraph("2023 - 2027", job_date_style)],
        [Paragraph("B.Tech in Computer Science and Engineering", job_subtitle_style), Paragraph("", job_date_style)],
        [Paragraph("<b>Sri Chaitanya Junior College</b>", job_title_style), Paragraph("2023", job_date_style)],
        [Paragraph("Class XII | 95.7%", job_subtitle_style), Paragraph("", job_date_style)],
        [Paragraph("<b>Sri Chaitanya High School</b>", job_title_style), Paragraph("2021", job_date_style)],
        [Paragraph("Class X | 99%", job_subtitle_style), Paragraph("", job_date_style)]
    ]
    tedu = Table(edu_data, colWidths=[5.5 * inch, 1.8 * inch])
    tedu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(tedu)
    elements.append(Spacer(1, 4))

    # Achievements & Certifications
    add_section("Achievements &amp; Certifications")
    elements.append(Paragraph("• <b>1st Prize</b> in the national-level <b>Harit Manthan Hackathon</b> conducted by the Delhi Development Authority (DDA).", bullet_style))
    elements.append(Paragraph("• <b>500+ LeetCode problems solved</b>, demonstrating strong Data Structures and Algorithms and problem-solving skills.", bullet_style))
    elements.append(Paragraph("• <b>Deloitte Technology Job Simulation Certificate</b> (Jan 2026, Verification: z2eDmvDMnyqMmBhrC).", bullet_style))
    elements.append(Paragraph("• <b>Deloitte Data Analytics Job Simulation Certificate</b> (Jan 2026, Verification: qhNs4A3LryTHbnrj4).", bullet_style))
    elements.append(Paragraph("• Secured <b>District Rank 18</b> in NTSE Level-1 (2021).", bullet_style))
    elements.append(Spacer(1, 4))

    # Additional Activities
    add_section("Additional Activities")
    elements.append(Paragraph("• <b>Piano Player (Keyboard)</b> - Passionate about learning and playing instrumental music.", bullet_style))
    elements.append(Paragraph("• <b>Photography</b> - Enthusiastic about portrait and landscape photography with experience in composition and editing.", bullet_style))
    elements.append(Paragraph("• <b>Continuous Learning</b> - Regularly build Python, AI/ML, and web development projects to strengthen technical skills.", bullet_style))

    doc.build(elements)
    print(f"Resume PDF successfully generated at: {output_path}")

if __name__ == '__main__':
    create_resume("c:/Nikhil/Portfolio/assets/docs/Nikhil_Bonigala_Resume.pdf")

