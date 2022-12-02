import { describe, afterEach, test, expect } from "vitest";
import request from "supertest";
import app from "../../app";

import { Limpador } from "../../utils/Limpador";
import Video from "../../model/schemas/Video/VideoModel";

import { videoCriado, videoEditado, videoEditadoVisualizar, videoVisualizado } from "../seeds/video";
import { tagCriada, tagEditada, tagEditadaVisualizada, tagVisualizada} from "../seeds/tags";
import Tag from "../../model/schemas/Tag/TagModel";

describe("Video", () => {
  describe("Quando enviar enviar dados na requisicao POST /api/videos/", () => {
    afterEach(() => {
      Limpador.limparTudo(Video);
    });
    test(
      "Deveria ser capaz de criar um video retorna-lo na resposta requisicao",
      async () => {
        const criarVideo = await request(app)
          .post("/api/videos/")
          .send(videoCriado);

        expect(criarVideo.statusCode).toEqual(201);
        expect(criarVideo.body).toEqual(videoVisualizado);
      }
    );
  });

  describe("Quando acessar a rota requisicao GET /api/videos/", () => {
    afterEach(() => {
      Limpador.limparTudo(Video);
    });
    test("Deveria ser capaz de visualizar lista com todos videos", async () => {
      const criarVideo = await request(app)
        .post("/api/videos/")
        .send(videoCriado);

      const listaVideos = await request(app).get("/api/videos/");

      expect(listaVideos.statusCode).toEqual(200);
      expect(listaVideos.body).toEqual(
        expect.arrayContaining([expect.objectContaining(videoVisualizado)])
      );
    });
  });

  describe("Quando acessar a rota com um ID de video GET /api/videos/1", () => {
    afterEach(() => {
      Limpador.limparTudo(Video);
    });
    test("Deveria ser capaz listar todos os videos", async () => {
      const criarVideo = await request(app)
        .post("/api/videos/")
        .send(videoCriado);

      const listaVideos = await request(app).get("/api/videos/1");

      expect(listaVideos.statusCode).toEqual(200);
      expect(listaVideos.body).toEqual(videoVisualizado);
    });
  });

  describe("Erro quando não existir nenhum elemento com o ID passado de video GET /api/videos/2", () => {
    afterEach(() => {
      Limpador.limparTudo(Video);
    });
    test("Deveria ser capaz emitir que há nenhum elemento", async () => {
      const criarVideo = await request(app)
        .post("/api/videos/")
        .send(videoCriado);

      const listaVideos = await request(app).get("/api/videos/2");

      expect(listaVideos.statusCode).toEqual(200);
      console.log(listaVideos.body);
      expect(listaVideos.body).toBeNull();
    });
  });

  describe("Quando acessar a rota com um ID de video DELETE /api/videos/", () => {
    afterEach(() => {
      Limpador.limparTudo(Video);
    });
    test("Deveria ser capaz deletar um video conforme o ID passado em parametros", async () => {
      const criarVideo = await request(app)
        .post("/api/videos/")
        .send(videoCriado);

      const deletarVideo = await request(app).delete("/api/videos/1");
      console.log(deletarVideo.body);

      expect(deletarVideo.statusCode).toEqual(200);
      const listaVideos = await request(app).get("/api/videos/");

      expect(listaVideos.body).toEqual([]);
    });
  });

  describe("Quando acessar a rota com um ID de video UPDATE /api/videos/", () => {
    afterEach(() => {
      Limpador.limparTudo(Video);
    });
    test("Deveria ser capaz de editar o conteudo do video e listar-lo", async () => {
      const criarVideo = await request(app)
        .post("/api/videos/")
        .send(videoCriado);

      
      const atualizarVideo = await request(app).put("/api/videos/1").send(videoEditado);
      
      const verVideoEditado = await request(app).get("/api/videos/1");

      expect(atualizarVideo.statusCode).toEqual(200);
      expect(verVideoEditado.statusCode).toEqual(200);
      expect(verVideoEditado.body).toEqual(videoEditadoVisualizar);
    });
  });
});












/// TAGS ----------------------------------------------------------------------
describe("Tags", () => {
  describe("Quando enviar enviar dados na requisicao POST /api/tags/", () => {
    afterEach(() => {
      Limpador.limparTudo(Tag);
    });
    test(
      "Deveria ser capaz de criar tag e retorna-la na resposta da requisicao",
      async () => {
        const criar = await request(app)
          .post("/api/tags/")
          .send(tagCriada);

        expect(criar.statusCode).toEqual(201);
        expect(criar.body).toEqual(tagVisualizada);
      }
    );
  });

  describe("Quando acessar a rota requisicao GET /api/tags/", () => {
    afterEach(() => {
      Limpador.limparTudo(Tag);
    });
    test("Deveria ser capaz de visualizar lista com todas as tags", async () => {
      const criar = await request(app)
        .post("/api/tags/")
        .send(tagCriada);

      const listar = await request(app).get("/api/tags/");

      console.log(listar.body);
      expect(listar.statusCode).toEqual(200);
      expect(listar.body).toEqual(
        expect.arrayContaining([expect.objectContaining(tagVisualizada)])
      );
    });
  });

  describe("Quando acessar a rota com um ID de video GET /api/tags/1", () => {
    afterEach(() => {
      Limpador.limparTudo(Tag);
    });
    test("Deveria ser capaz listar todos os videos", async () => {
      const criar = await request(app)
        .post("/api/tags/")
        .send(tagCriada);

      const listar = await request(app).get("/api/tags/1");

      expect(listar.statusCode).toEqual(200);
      expect(listar.body).toEqual(tagVisualizada);
    });
  });

  describe("Erro quando não existir nenhum elemento com o ID passado de video GET /api/tags/2", () => {
    afterEach(() => {
      Limpador.limparTudo(Tag);
    });
    test("Deveria ser capaz emitir que há nenhum elemento", async () => {
      const criar = await request(app)
        .post("/api/tags/")
        .send(tagCriada);

      const listar = await request(app).get("/api/tags/2");

      expect(listar.statusCode).toEqual(200);
      expect(listar.body).toBeNull();
    });
  });

  describe("Quando acessar a rota com um ID de uma tag DELETE /api/tags/", () => {
    afterEach(() => {
      Limpador.limparTudo(Tag);
    });
    test("Deveria ser capaz deletar um video conforme o ID passado em parametros", async () => {
      const criar = await request(app)
        .post("/api/tags/")
        .send(tagCriada);

      const deletarVideo = await request(app).delete("/api/tags/1");
      const listaVideos = await request(app).get("/api/tags/");

      expect(deletarVideo.statusCode).toEqual(200);
      expect(listaVideos.body).toEqual([]);
    });
  });

  describe("Quando acessar a rota com um ID de tag UPDATE /api/tags/", () => {
    afterEach(() => {
      Limpador.limparTudo(Tag);
    });
    test("Deveria ser capaz atualizar e lista tag modificada", async () => {
      const criarVideo = await request(app)
        .post("/api/tags/")
        .send(tagCriada);

        const atualizar = await request(app)
        .put("/api/tags/1")
        .send(tagEditada);

        const listar = await request(app).get("/api/tags/");
        
      expect(atualizar.statusCode).toEqual(200);
      expect(atualizar.body).toHaveProperty('ok');
      expect(listar.body).toEqual(
        expect.arrayContaining([expect.objectContaining(tagEditadaVisualizada)])
      );
    });
  });
});