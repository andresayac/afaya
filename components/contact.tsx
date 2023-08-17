export function Contact() {
	return (
		<section id="contact">
			<h2 style={{ fontSize: "4rem" }}>Contacto</h2>
			<form action="https://api.web3forms.com/submit" method="POST" className="form" id="form">
				<input type="hidden" name="access_key" value="8f318ca1-3e10-4ac9-8086-b0d9366e272b" />
				<div className="form-group" id="name">
					<label htmlFor="name">Tu nombre</label>
					<input name="from_name" required type="text" id="name" />
				</div>
				<div className="form-group" id="email">
					<label htmlFor="email">Tu Email</label>
					<input name="replyto" required type="email" id="email" />
				</div>
				<div className="form-group" id="message">
					<label htmlFor="message">Mensaje</label>
					<textarea name="message" required id="message" />
				</div>
				<input type="checkbox" name="botcheck" id="" style={{ display: "none" }} />
				<input type="submit" id="submit" value="Enviar" />
			</form>
		</section>
	);
}
