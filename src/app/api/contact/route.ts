import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { nome, telefone, servico } = await request.json();

    if (!nome || !telefone || !servico) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"MB Pinturas - Site" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Nova Solicitação de Orçamento - ${servico}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #1e3a5f, #2a5298); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">MB Pinturas</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Nova Solicitação de Orçamento</p>
          </div>
          <div style="padding: 30px;">
            <h2 style="color: #1e3a5f; margin-top: 0;">Dados do Cliente:</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 140px;">Nome:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${nome}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Telefone:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${telefone}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Serviço Desejado:</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${servico}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>Atenção:</strong> Entre em contato com o cliente o mais rápido possível para garantir o fechamento do serviço.
              </p>
            </div>
          </div>
          <div style="background: #1e293b; padding: 20px; text-align: center;">
            <p style="color: rgba(255,255,255,0.5); margin: 0; font-size: 12px;">
              Enviado automaticamente pelo site MB Pinturas
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
