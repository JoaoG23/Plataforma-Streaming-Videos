PGDMP         :                z            streaming_db    11.15    11.15 (    /           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            0           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            1           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            2           1262    316832    streaming_db    DATABASE     ?   CREATE DATABASE streaming_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';
    DROP DATABASE streaming_db;
             postgres    false            ?            1259    316833    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         postgres    false            ?            1259    316894    tb_favoritos    TABLE     l   CREATE TABLE public.tb_favoritos (
    id integer NOT NULL,
    id_usuario integer,
    id_video integer
);
     DROP TABLE public.tb_favoritos;
       public         postgres    false            ?            1259    316890    tb_favoritos_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tb_favoritos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.tb_favoritos_id_seq;
       public       postgres    false    204            3           0    0    tb_favoritos_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.tb_favoritos_id_seq OWNED BY public.tb_favoritos.id;
            public       postgres    false    203            ?            1259    316858    tb_tags    TABLE     e   CREATE TABLE public.tb_tags (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL
);
    DROP TABLE public.tb_tags;
       public         postgres    false            ?            1259    316846    tb_tags_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tb_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.tb_tags_id_seq;
       public       postgres    false    200            4           0    0    tb_tags_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.tb_tags_id_seq OWNED BY public.tb_tags.id;
            public       postgres    false    199            ?            1259    316840    tb_usuarios    TABLE     -  CREATE TABLE public.tb_usuarios (
    id integer NOT NULL,
    usuario character varying(70) NOT NULL,
    email character varying(70) NOT NULL,
    senha text NOT NULL,
    is_admin boolean DEFAULT false NOT NULL,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.tb_usuarios;
       public         postgres    false            ?            1259    316838    tb_usuarios_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tb_usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.tb_usuarios_id_seq;
       public       postgres    false    198            5           0    0    tb_usuarios_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.tb_usuarios_id_seq OWNED BY public.tb_usuarios.id;
            public       postgres    false    197            ?            1259    316883 	   tb_videos    TABLE     ?   CREATE TABLE public.tb_videos (
    id integer NOT NULL,
    titulo character varying(255) NOT NULL,
    sobre character varying(255) NOT NULL,
    url text NOT NULL,
    ano integer NOT NULL,
    tag_id integer,
    autor character varying(255)
);
    DROP TABLE public.tb_videos;
       public         postgres    false            ?            1259    316881    tb_videos_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tb_videos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.tb_videos_id_seq;
       public       postgres    false    202            6           0    0    tb_videos_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.tb_videos_id_seq OWNED BY public.tb_videos.id;
            public       postgres    false    201            ?
           2604    316898    tb_favoritos id    DEFAULT     r   ALTER TABLE ONLY public.tb_favoritos ALTER COLUMN id SET DEFAULT nextval('public.tb_favoritos_id_seq'::regclass);
 >   ALTER TABLE public.tb_favoritos ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    203    204    204            ?
           2604    316867 
   tb_tags id    DEFAULT     h   ALTER TABLE ONLY public.tb_tags ALTER COLUMN id SET DEFAULT nextval('public.tb_tags_id_seq'::regclass);
 9   ALTER TABLE public.tb_tags ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    200    199    200            ?
           2604    316845    tb_usuarios id    DEFAULT     p   ALTER TABLE ONLY public.tb_usuarios ALTER COLUMN id SET DEFAULT nextval('public.tb_usuarios_id_seq'::regclass);
 =   ALTER TABLE public.tb_usuarios ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    198    198            ?
           2604    316886    tb_videos id    DEFAULT     l   ALTER TABLE ONLY public.tb_videos ALTER COLUMN id SET DEFAULT nextval('public.tb_videos_id_seq'::regclass);
 ;   ALTER TABLE public.tb_videos ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    202    201    202            $          0    316833    SequelizeMeta 
   TABLE DATA               /   COPY public."SequelizeMeta" (name) FROM stdin;
    public       postgres    false    196   ,       ,          0    316894    tb_favoritos 
   TABLE DATA               @   COPY public.tb_favoritos (id, id_usuario, id_video) FROM stdin;
    public       postgres    false    204   E,       (          0    316858    tb_tags 
   TABLE DATA               -   COPY public.tb_tags (id, titulo) FROM stdin;
    public       postgres    false    200   l,       &          0    316840    tb_usuarios 
   TABLE DATA               d   COPY public.tb_usuarios (id, usuario, email, senha, is_admin, "createdAt", "updatedAt") FROM stdin;
    public       postgres    false    198   ?,       *          0    316883 	   tb_videos 
   TABLE DATA               O   COPY public.tb_videos (id, titulo, sobre, url, ano, tag_id, autor) FROM stdin;
    public       postgres    false    202   ?-       7           0    0    tb_favoritos_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.tb_favoritos_id_seq', 3, true);
            public       postgres    false    203            8           0    0    tb_tags_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.tb_tags_id_seq', 4, true);
            public       postgres    false    199            9           0    0    tb_usuarios_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.tb_usuarios_id_seq', 2, true);
            public       postgres    false    197            :           0    0    tb_videos_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.tb_videos_id_seq', 5, true);
            public       postgres    false    201            ?
           2606    316837     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public         postgres    false    196            ?
           2606    316901    tb_favoritos tb_favoritos_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.tb_favoritos
    ADD CONSTRAINT tb_favoritos_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.tb_favoritos DROP CONSTRAINT tb_favoritos_pkey;
       public         postgres    false    204            ?
           2606    316875    tb_tags tb_tags_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.tb_tags
    ADD CONSTRAINT tb_tags_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.tb_tags DROP CONSTRAINT tb_tags_pkey;
       public         postgres    false    200            ?
           2606    316880 !   tb_usuarios tb_usuarios_email_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.tb_usuarios
    ADD CONSTRAINT tb_usuarios_email_key UNIQUE (email);
 K   ALTER TABLE ONLY public.tb_usuarios DROP CONSTRAINT tb_usuarios_email_key;
       public         postgres    false    198            ?
           2606    316871    tb_usuarios tb_usuarios_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.tb_usuarios
    ADD CONSTRAINT tb_usuarios_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.tb_usuarios DROP CONSTRAINT tb_usuarios_pkey;
       public         postgres    false    198            ?
           2606    316878 #   tb_usuarios tb_usuarios_usuario_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.tb_usuarios
    ADD CONSTRAINT tb_usuarios_usuario_key UNIQUE (usuario);
 M   ALTER TABLE ONLY public.tb_usuarios DROP CONSTRAINT tb_usuarios_usuario_key;
       public         postgres    false    198            ?
           2606    316893    tb_videos tb_videos_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.tb_videos
    ADD CONSTRAINT tb_videos_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.tb_videos DROP CONSTRAINT tb_videos_pkey;
       public         postgres    false    202            ?
           2606    316905 )   tb_favoritos tb_favoritos_id_usuario_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.tb_favoritos
    ADD CONSTRAINT tb_favoritos_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.tb_usuarios(id);
 S   ALTER TABLE ONLY public.tb_favoritos DROP CONSTRAINT tb_favoritos_id_usuario_fkey;
       public       postgres    false    2719    198    204            ?
           2606    316910 '   tb_favoritos tb_favoritos_id_video_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.tb_favoritos
    ADD CONSTRAINT tb_favoritos_id_video_fkey FOREIGN KEY (id_video) REFERENCES public.tb_videos(id);
 Q   ALTER TABLE ONLY public.tb_favoritos DROP CONSTRAINT tb_favoritos_id_video_fkey;
       public       postgres    false    204    2725    202            ?
           2606    316897    tb_videos tb_videos_tag_id_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.tb_videos
    ADD CONSTRAINT tb_videos_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES public.tb_tags(id);
 I   ALTER TABLE ONLY public.tb_videos DROP CONSTRAINT tb_videos_tag_id_fkey;
       public       postgres    false    2723    200    202            $   3   x?32022?4252054??M.JM,I?MJ,N????L?L???*?????? ???      ,      x?3?4?4?2??\1z\\\ :      (   2   x?3?,N?U(IL?2?,IM????O?L?2?LL/?L.?))-J?????? ^?      &   ?   x?}?=S?0 ???W8tm?I?LU8????J=??/R?????ˡ?:????σ?άi?w?ӽ.?.Fn??ѡ?d??I0?Y??y??Ӽ;??8?}??r???}2^?(p?a?????q?|?Q?!z9????熧?5?.???wS???p+6:Z<2?$*M?]k¬?}?;??9??YTT??L??u6Q??#3I??I?%?!?פ7?8?~N      *     x???;N?@?z}?iB??؆"RE?HA?P"E??!6?w??u?%
??(EN??pl???f4??bbv?j??@???Wp(4)Z?|
o?Op?bQiI,A+L.8?D??\"??,s??? ???o?rU???"???t;9???????w<]??k?j?}4?#????en?_?v'Hu%BA?l+ɪ}i?	??㚎??F?;??U?C(:??.?M?q??m?Kwa??%????N??,?Ot?aG????9???^?????????W?}???͜=     