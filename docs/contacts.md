---
layout: post
permalink: /contacts
title: Контакты
header_img: /dist/imgs/contacts-header.jpg
---

<div class="text-center py-12 px-6 mt-12">
	<h1 class="font-display font-bold text-5xl mb-6">Связаться с Еленой</h1>
</div>

<div class="container mx-auto px-6 mb-12">

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">

		<div>
			<a href="mailto:elena@rukids.us" class="flex items-center my-2">
				<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
				elena@rukids.us
			</a>
			<div class="flex items-center my-2">
				<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                ПН-ПТ: 10-2 | ВС 9-12 
			</div>
		</div>

		<div x-data="{ input : 'default' }">
			<form action="https://www.elformo.com/forms/ec49810a-db83-4ce6-bb90-a2880b792b94" method="post" accept-charset="UTF-8" name="contact" x-on:submit="input=''">
				<div class="invisible h-0">
					<label class="block text-base tracking-tight text-gray-600">Аккаунт</label>
                    <textarea id="elformo_honeypot" placeholder="Аккаунт" name="elformo_honeypot"  class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700" x-text="input"></textarea>
                </div>
				<div>
					<label class="block text-base tracking-tight text-gray-600">Имя</label>
					<input name="name" type="text" placeholder="Имя" required class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700" />
				</div>
				<div class="mt-6">
					<label class="block text-base tracking-tight text-gray-600">Email</label>
					<input name="email" type="email" placeholder="your@email.com" required class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700" />
				</div>
				<div class="mt-6">
					<label class="block text-base tracking-tight text-gray-600">Сообщение</label>
					<textarea name="message" placeholder="Ваше Сообщение" required class="mt-2 w-full border-none text-sm p-4 bg-gray-100 text-gray-700"></textarea>
				</div>
				<button class="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4 mt-6" type="submit" >
					Отправить сообщение
				</button>
			</form>
		</div>
	</div>
</div>