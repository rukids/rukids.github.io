---
layout: post
permalink: /schedule
title: Расписание
header_img: /dist/imgs/schedule-header.jpg
---

<div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">
    <div>
        <div class="bg-gray-200 p-8">
            <h2 class="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                2021
            </h2>
            <p class="mt-4 max-w-md">
                {% assign schedule = site.schedule | where:"year", "2021" | sort: "month" %}
    			{% for item in schedule  %}
                    <a href="{{ item.url }}" class="block mb-4">{{ item.title }}</a>
    			{% endfor %}
            </p>
        </div>
    </div>
</div>