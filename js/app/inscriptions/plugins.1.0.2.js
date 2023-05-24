async function loadPlugins()
{

    // load jq
    await loadScript('js/lib/jquery.3.6.4.js');

    console.log("plugins____", plugins);

    //{name: 'orc20deploy', file: 'orc20deploy.1.0.0.js', instance: orc20deploy}
    //{name: 'orc20mint', file: 'orc20mint.1.0.0.js', instance: orc20mint}

    for(let i = 0; i < plugins.length; i++)
    {
        await loadScript('js/app/inscriptions/plugins/'+plugins[i].name+'/'+plugins[i].file);

        plugins[i].instance = eval('new ' + plugins[i].name);
        await plugins[i].instance.init();

        jQuery('#plugin-list ul').append('<li class="nav-item">' +
            '<a id="'+plugins[i].name+'_nav" class="'+plugins[i].name+'" href="javascript:void(0);">'+plugins[i].instance.getTitle()+'</a>' +
            '</li>');

        jQuery('#'+plugins[i].name+'_nav').on('click', async function()
        {
            console.log("onClICK________")
            active_plugin = plugins[i];
            files = [];
            jQuery('#padding').val(''+plugins[i].instance.getPadding());
            padding = ''+plugins[i].instance.getPadding();
            $('#app-form').reset();

            jQuery('.option_form').css('display', 'none');
            jQuery('.options a').removeClass('active');

            jQuery('#'+plugins[i].name+'_nav').addClass('active');
            jQuery('#plugin_form').html(await plugins[i].instance.render());
            jQuery('#plugin_form').css('display', 'block');

            await plugins[i].instance.onPluginLoaded();
        });
    }

    if(plugins.length != 0)
    {
        $('#plugin-list').style.display = 'inline-block';
    }
}

let loadScript = function(uri){
    return new Promise((resolve, reject) => {
        let tag = document.createElement('script');
        tag.src = uri;
        tag.async = true;
        tag.onload = () => {
            resolve();
        };
        let firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });
}