export const Contact = () => {
    const handleFormSubmit = (formData) => {
        // console.log(formData.entries())
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData)
    }
    return <section className="section-contact">
        <h2 className="container-title"></h2>
        <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input type="text" className="form-control" placeholder="enter your name" name="username" required autoComplete="off" />
                <input type="text" className="form-control" placeholder="enter your email" name="email" required autoComplete="off" />
                <textarea className="form-control" placeholder="enter your message" rows="10" name="message" required autoComplete="off"></textarea>
                <button type="submit" value="send" className="text-center">send</button>
            </form>

        </div>
    </section>

}