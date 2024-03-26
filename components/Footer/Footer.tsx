function Footer() {
    return (
        <footer
            className="flex justify-center mt-32 mb-16 footer "
        >
            <div className="flex flex-col footer-container gap-3">
                <div className="flex gap-1 text-primary-300 flex justify-center">
                    <a href="mailto:qiqihe.da@gmail.com" className="hover:text-primary-200">Email</a> / 
                    <a href="https://www.linkedin.com/in/qiqihe/" target="_blank" className="hover:text-primary-200">LinkedIn</a> /
                    <a href="https://github.com/qiqihe" target="_blank" className="hover:text-primary-200">GitHub</a> 
                </div>
                <p className="flex text-primary-300 footer-text">
                    © 2024 Kiki He All Rights Reserved
                </p>
                <p className="flex text-primary-300 footer-text" style={{ fontSize: '0.875rem' }}>
                    Special thanks to website designer,&nbsp;<em><a href="https://github.com/honghong1012/Portfolio" style={{ textDecoration: 'underline'}}>Scarlett</a></em>
                </p>

    
            </div>
        </footer>
    );
}

export default Footer;
