<script>
        let subMenu = document.getElementById("subMenu");
        function toggleMenu(){
            subMenu.classList.toggle("open-menu");
        }
        window.watsonAssistantChatOptions = {
            integrationID: "1a8c11c0-839e-4442-8b03-59f7c12ce5f5", // The ID of this integration.
            region: "au-syd", // The region your integration is hosted in.
            serviceInstanceID: "bada3725-51e6-42fe-bccc-3e2603433478", // The ID of your service instance.
            onLoad: function(instance) { instance.render(); }
        };
        setTimeout(function(){
            const t=document.createElement('script');
            t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
            document.head.appendChild(t);
        });
   </script>