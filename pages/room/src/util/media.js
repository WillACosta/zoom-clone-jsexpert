/**
 * Classe responsável por manipular todos os recursos de mídas do browser
 * Câmera, Compartilhar Tela, Print, etc.
 */
class Media {
  async getCamera(audio = false, video = true) {
    return navigator.mediaDevices.getUserMedia({
      video,
      audio
    });
  }
}